import { Linking, Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";

/**
 * Opens a web URL smoothly inside an in-app browser (Chrome Custom Tab / Safari View Controller)
 * with graceful fallback to system browser.
 */
export async function openExternalUrl(url: string): Promise<void> {
  if (!url) return;
  try {
    await WebBrowser.openBrowserAsync(url, {
      presentationStyle: WebBrowser.WebBrowserPresentationStyle.FULL_SCREEN,
      toolbarColor: "#1B4D3E",
      controlsColor: "#2ECC71",
      showTitle: true,
      enableBarCollapsing: true,
    });
  } catch (error) {
    console.warn("Failed to open with WebBrowser, falling back to Linking:", error);
    try {
      await Linking.openURL(url);
    } catch (linkError) {
      console.error("Failed to open URL:", linkError);
      Alert.alert("Unable to open link", "Please check your network connection and try again.");
    }
  }
}
