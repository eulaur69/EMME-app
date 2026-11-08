import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Share,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { LESSONS, CHAPTERS } from "../constants/curriculum";
import { NativePdfReader } from "../components/NativePdfReader";
import {
  isLessonCached,
  downloadAndCacheLessonPdf,
  shareOrOpenInNativePdfApp,
} from "../services/pdfService";
import { openExternalUrl } from "../utils/linking";

interface RouteParams {
  lessonId?: string;
}

export const LessonScreen: React.FC<{ defaultLessonId?: string }> = ({
  defaultLessonId,
}) => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const params = (route.params as RouteParams) || {};
  const lessonId = params.lessonId || defaultLessonId || "1_1";
  const lesson = LESSONS[lessonId] || LESSONS["1_1"];
  const chapter = CHAPTERS[lesson.chapterId];

  const [activeTab, setActiveTab] = useState<"reader" | "overview">("reader");
  const [cached, setCached] = useState<boolean>(false);
  const [caching, setCaching] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    isLessonCached(lessonId).then(setCached);
  }, [lessonId]);

  const handleDownloadOffline = async () => {
    if (cached) return;
    try {
      setCaching(true);
      await downloadAndCacheLessonPdf(lessonId);
      setCached(true);
    } catch (e: any) {
      alert(e.message || "Failed to download offline");
    } finally {
      setCaching(false);
    }
  };

  const handleShare = async () => {
    try {
      await shareOrOpenInNativePdfApp(lessonId);
    } catch (e: any) {
      alert(e.message || "Failed to open document");
    }
  };

  return (
    <View style={styles.screenWrapper}>
      {/* Tab Switcher */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === "reader" && styles.activeTabButton]}
          onPress={() => setActiveTab("reader")}
        >
          <MaterialIcons
            name="auto-stories"
            size={18}
            color={activeTab === "reader" ? "#1B4D3E" : "#7F8C8D"}
          />
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "reader" && styles.activeTabButtonText,
            ]}
          >
            Read Document
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "overview" && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab("overview")}
        >
          <MaterialIcons
            name="info"
            size={18}
            color={activeTab === "overview" ? "#1B4D3E" : "#7F8C8D"}
          />
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "overview" && styles.activeTabButtonText,
            ]}
          >
            Lesson Overview
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Tab Content */}
      {activeTab === "reader" ? (
        <View style={styles.readerContainer}>
          <NativePdfReader
            lessonId={lessonId}
            isFullscreen={isFullscreen}
            onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
          />
        </View>
      ) : (
        <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollInner}>
          {/* Hero Banner */}
          <View style={styles.heroCard}>
            <Image source={lesson.image} style={styles.heroImage} resizeMode="cover" />
            <View style={styles.chapterBadge}>
              <Text style={styles.chapterBadgeText}>
                Unit {lesson.chapterId} • {chapter?.title}
              </Text>
            </View>
          </View>

          {/* Title & Description */}
          <View style={styles.contentSection}>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text style={styles.lessonDescription}>{lesson.description}</Text>

            {/* Quick Action Badges */}
            <View style={styles.actionsRow}>
              <TouchableOpacity
                style={[styles.badgeBtn, cached && styles.cachedBadgeBtn]}
                onPress={handleDownloadOffline}
                disabled={caching || cached}
              >
                {caching ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <MaterialIcons
                    name={cached ? "check-circle" : "file-download"}
                    size={18}
                    color="#FFFFFF"
                  />
                )}
                <Text style={styles.badgeBtnText}>
                  {cached ? "Saved Offline" : "Save for Offline"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.badgeBtn, styles.shareBadgeBtn]}
                onPress={handleShare}
              >
                <MaterialIcons name="share" size={18} color="#FFFFFF" />
                <Text style={styles.badgeBtnText}>Open / Share</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Key Topics Covered */}
          <View style={styles.topicsCard}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="lightbulb" size={20} color="#F39C12" />
              <Text style={styles.sectionHeading}>Key Concepts & Topics</Text>
            </View>
            <View style={styles.topicsList}>
              {lesson.keyTopics.map((topic, index) => (
                <View key={index} style={styles.topicItem}>
                  <MaterialIcons name="check" size={16} color="#27AE60" />
                  <Text style={styles.topicText}>{topic}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={styles.primaryCta}
            onPress={() => setActiveTab("reader")}
          >
            <MaterialIcons name="menu-book" size={20} color="#FFFFFF" />
            <Text style={styles.primaryCtaText}>Start Reading Native Lesson</Text>
          </TouchableOpacity>

          {chapter?.gameUrl && (
            <TouchableOpacity
              style={styles.gameCta}
              onPress={() => openExternalUrl(chapter.gameUrl)}
            >
              <MaterialIcons name="sports-esports" size={20} color="#FFFFFF" />
              <Text style={styles.gameCtaText}>Play {chapter.gameTitle}</Text>
            </TouchableOpacity>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    gap: 8,
  },
  tabButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#F1F5F9",
  },
  activeTabButton: {
    backgroundColor: "#E8F8F0",
  },
  tabButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
  },
  activeTabButtonText: {
    color: "#1B4D3E",
    fontWeight: "700",
  },
  readerContainer: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  scrollInner: {
    padding: 16,
  },
  heroCard: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: 220,
  },
  chapterBadge: {
    position: "absolute",
    top: 14,
    left: 14,
    backgroundColor: "rgba(27, 77, 62, 0.9)",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  chapterBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  contentSection: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 8,
  },
  lessonDescription: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 22,
    marginBottom: 16,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 10,
  },
  badgeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1B4D3E",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  cachedBadgeBtn: {
    backgroundColor: "#27AE60",
  },
  shareBadgeBtn: {
    backgroundColor: "#475569",
  },
  badgeBtnText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  topicsCard: {
    marginTop: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },
  topicsList: {
    gap: 10,
  },
  topicItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  topicText: {
    fontSize: 14,
    color: "#334155",
    flex: 1,
  },
  primaryCta: {
    marginTop: 20,
    backgroundColor: "#1B4D3E",
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#1B4D3E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  primaryCtaText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  gameCta: {
    marginTop: 12,
    backgroundColor: "#0284C7",
    paddingVertical: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  gameCtaText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
