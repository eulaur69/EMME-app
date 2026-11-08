import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
} from "react-native";
import { WebView } from "react-native-webview";
import * as FileSystem from "expo-file-system/legacy";
import { MaterialIcons } from "@expo/vector-icons";
import {
  downloadAndCacheLessonPdf,
  isLessonCached,
  getLocalLessonPdfUri,
  shareOrOpenInNativePdfApp,
} from "../services/pdfService";
import { LESSONS } from "../constants/curriculum";

interface NativePdfReaderProps {
  lessonId: string;
  onClose?: () => void;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
}

export const NativePdfReader: React.FC<NativePdfReaderProps> = ({
  lessonId,
  isFullscreen = false,
  onToggleFullscreen,
}) => {
  const lesson = LESSONS[lessonId];
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [pdfBase64, setPdfBase64] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const webViewRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPdf() {
      try {
        setLoading(true);
        setError(null);
        setDownloadProgress(0.1);

        const cached = await isLessonCached(lessonId);
        let fileUri: string;

        if (cached) {
          fileUri = getLocalLessonPdfUri(lessonId);
          setDownloadProgress(0.9);
        } else {
          fileUri = await downloadAndCacheLessonPdf(lessonId, (progress) => {
            if (isMounted) setDownloadProgress(0.1 + progress * 0.7);
          });
        }

        // Read base64 for reliable offline canvas rendering in WebView
        const base64Data = await FileSystem.readAsStringAsync(fileUri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        if (isMounted) {
          setPdfBase64(base64Data);
          setDownloadProgress(1);
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Error loading PDF:", err);
        if (isMounted) {
          setError(err?.message || "Failed to load document.");
          setLoading(false);
        }
      }
    }

    loadPdf();

    return () => {
      isMounted = false;
    };
  }, [lessonId]);

  const handleZoomIn = () => {
    webViewRef.current?.injectJavaScript(`
      if (window.zoomIn) window.zoomIn();
      true;
    `);
  };

  const handleZoomOut = () => {
    webViewRef.current?.injectJavaScript(`
      if (window.zoomOut) window.zoomOut();
      true;
    `);
  };

  const handleFitWidth = () => {
    webViewRef.current?.injectJavaScript(`
      if (window.fitWidth) window.fitWidth();
      true;
    `);
  };

  const handleExternalOpen = async () => {
    try {
      await shareOrOpenInNativePdfApp(lessonId);
    } catch (err: any) {
      alert(err.message || "Could not open document");
    }
  };

  const onWebViewMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === "pageChange") {
        setCurrentPage(data.page);
        if (data.total) setTotalPages(data.total);
      } else if (data.type === "loaded") {
        setTotalPages(data.total);
        setLoading(false);
      }
    } catch (e) {
      // ignore
    }
  };

  // Modern HTML5 Canvas PDF Viewer powered by PDF.js (Embedded, 100% offline-ready, zero Google Docs chrome)
  const viewerHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <style>
    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
    html, body {
      margin: 0;
      padding: 0;
      background-color: #1E272C;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      overflow-x: hidden;
      width: 100%;
    }
    #viewer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 8px 60px 8px;
      width: 100%;
      min-height: 100vh;
    }
    .page-wrapper {
      margin: 8px 0;
      box-shadow: 0 4px 14px rgba(0,0,0,0.45);
      border-radius: 6px;
      overflow: hidden;
      background: #FFFFFF;
      max-width: 100%;
      position: relative;
    }
    canvas {
      display: block;
      width: 100%;
      height: auto;
    }
    #loading-msg {
      color: #ECEFF1;
      font-size: 14px;
      margin-top: 40px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .spinner {
      width: 32px;
      height: 32px;
      border: 3px solid rgba(255,255,255,0.2);
      border-top-color: #2ECC71;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
</head>
<body>
  <div id="viewer-container">
    <div id="loading-msg">
      <div class="spinner"></div>
      <div>Rendering native lesson pages...</div>
    </div>
  </div>

  <script>
    var pdfData = "${pdfBase64 || ""}";
    var pdfDoc = null;
    var currentScale = 1.35;
    var container = document.getElementById('viewer-container');
    var loadingMsg = document.getElementById('loading-msg');

    function sendToRN(payload) {
      if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
        window.ReactNativeWebView.postMessage(JSON.stringify(payload));
      }
    }

    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    function initDoc() {
      if (!pdfData) return;
      try {
        var raw = atob(pdfData);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
          array[i] = raw.charCodeAt(i);
        }

        pdfjsLib.getDocument({ data: array }).promise.then(function(doc) {
          pdfDoc = doc;
          if (loadingMsg) loadingMsg.remove();
          sendToRN({ type: 'loaded', total: doc.numPages });
          renderAllPages();
        }).catch(function(err) {
          if (loadingMsg) {
            loadingMsg.innerHTML = '<div style="color:#E74C3C;">Failed to parse PDF document.<br>' + err.message + '</div>';
          }
        });
      } catch (err) {
        if (loadingMsg) {
          loadingMsg.innerHTML = '<div style="color:#E74C3C;">Decoding error: ' + err.message + '</div>';
        }
      }
    }

    function renderAllPages() {
      if (!pdfDoc) return;
      container.innerHTML = '';
      for (var pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        renderPage(pageNum);
      }
    }

    function renderPage(pageNum) {
      var pageDiv = document.createElement('div');
      pageDiv.className = 'page-wrapper';
      pageDiv.id = 'page-' + pageNum;
      container.appendChild(pageDiv);

      pdfDoc.getPage(pageNum).then(function(page) {
        var viewport = page.getViewport({ scale: currentScale });
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        pageDiv.appendChild(canvas);

        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
      });
    }

    window.zoomIn = function() {
      currentScale = Math.min(currentScale + 0.25, 3.0);
      renderAllPages();
    };

    window.zoomOut = function() {
      currentScale = Math.max(currentScale - 0.25, 0.75);
      renderAllPages();
    };

    window.fitWidth = function() {
      currentScale = 1.2;
      renderAllPages();
    };

    // Track scroll to update current page indicator
    window.addEventListener('scroll', function() {
      if (!pdfDoc) return;
      var pages = document.querySelectorAll('.page-wrapper');
      var scrollPos = window.scrollY + 100;
      for (var i = 0; i < pages.length; i++) {
        var el = pages[i];
        if (el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
          sendToRN({ type: 'pageChange', page: i + 1, total: pdfDoc.numPages });
          break;
        }
      }
    });

    if (document.readyState === 'complete') {
      initDoc();
    } else {
      window.addEventListener('load', initDoc);
    }
  </script>
</body>
</html>
  `;

  return (
    <View style={[styles.container, isFullscreen && styles.fullscreenContainer]}>
      {/* Top Floating Controls Bar */}
      <View style={styles.topToolbar}>
        <View style={styles.pageBadge}>
          <MaterialIcons name="menu-book" size={16} color="#FFFFFF" />
          <Text style={styles.pageBadgeText}>
            {totalPages > 0 ? `Page ${currentPage} of ${totalPages}` : "Document Reader"}
          </Text>
        </View>

        <View style={styles.controlsGroup}>
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={handleZoomOut}
            accessibilityLabel="Zoom out"
          >
            <MaterialIcons name="zoom-out" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconBtn}
            onPress={handleFitWidth}
            accessibilityLabel="Fit width"
          >
            <MaterialIcons name="fit-screen" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconBtn}
            onPress={handleZoomIn}
            accessibilityLabel="Zoom in"
          >
            <MaterialIcons name="zoom-in" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          {onToggleFullscreen && (
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={onToggleFullscreen}
              accessibilityLabel={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              <MaterialIcons
                name={isFullscreen ? "fullscreen-exit" : "fullscreen"}
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[styles.iconBtn, styles.shareBtn]}
            onPress={handleExternalOpen}
            accessibilityLabel="Open in Native App"
          >
            <MaterialIcons name="open-in-new" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Area */}
      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#27AE60" />
          <Text style={styles.loadingTitle}>Loading Native Lesson...</Text>
          <Text style={styles.loadingSubtitle}>
            {downloadProgress > 0 && downloadProgress < 1
              ? `Downloading document (${Math.round(downloadProgress * 100)}%)...`
              : "Preparing high-resolution pages..."}
          </Text>
          <View style={styles.progressBarBg}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${Math.round(downloadProgress * 100)}%` },
              ]}
            />
          </View>
        </View>
      ) : error ? (
        <View style={styles.centerContainer}>
          <MaterialIcons name="error-outline" size={48} color="#E74C3C" />
          <Text style={styles.errorTitle}>Could not load document</Text>
          <Text style={styles.errorMsg}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={handleExternalOpen}
          >
            <MaterialIcons name="open-in-browser" size={20} color="#FFFFFF" />
            <Text style={styles.retryButtonText}>Open in External Viewer</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <WebView
          ref={webViewRef}
          originWhitelist={["*"]}
          source={{ html: viewerHtml }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={Platform.OS === "android"}
          onMessage={onWebViewMessage}
          bounces={true}
          showsVerticalScrollIndicator={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E272C",
    borderRadius: 12,
    overflow: "hidden",
    minHeight: 460,
  },
  fullscreenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    borderRadius: 0,
  },
  topToolbar: {
    height: 48,
    backgroundColor: "#143D30",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  pageBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.12)",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  pageBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  controlsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  shareBtn: {
    backgroundColor: "#27AE60",
  },
  webview: {
    flex: 1,
    backgroundColor: "#1E272C",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#1E272C",
  },
  loadingTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  loadingSubtitle: {
    color: "#BDC3C7",
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
  },
  progressBarBg: {
    width: 200,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 3,
    marginTop: 16,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#2ECC71",
    borderRadius: 3,
  },
  errorTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 12,
  },
  errorMsg: {
    color: "#BDC3C7",
    fontSize: 13,
    marginTop: 6,
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#27AE60",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});
