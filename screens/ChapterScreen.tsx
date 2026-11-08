import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { CHAPTERS, LESSONS } from "../constants/curriculum";
import { openExternalUrl } from "../utils/linking";

interface RouteParams {
  chapterId?: number;
}

export const ChapterScreen: React.FC<{ defaultChapterId?: number }> = ({
  defaultChapterId,
}) => {
  const route = useRoute();
  const navigation = useNavigation<any>();
  const params = (route.params as RouteParams) || {};
  const chapterId = params.chapterId || defaultChapterId || 1;
  const chapter = CHAPTERS[chapterId] || CHAPTERS[1];
  const lessons = chapter.lessonIds.map((id) => LESSONS[id]).filter(Boolean);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Chapter Game Banner */}
      {chapter.gameUrl ? (
        <TouchableOpacity
          style={styles.gameBanner}
          onPress={() => openExternalUrl(chapter.gameUrl)}
          activeOpacity={0.85}
        >
          <View style={styles.gameBannerContent}>
            <MaterialIcons name="sports-esports" size={28} color="#FFFFFF" />
            <View style={{ flex: 1 }}>
              <Text style={styles.gameBannerTitle}>{chapter.gameTitle}</Text>
              <Text style={styles.gameBannerSubtitle}>
                Test your knowledge with an interactive educational game
              </Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
      ) : null}

      {/* Chapter Overview Header */}
      <View style={styles.headerCard}>
        <Image source={chapter.image} style={styles.headerImage} resizeMode="cover" />
        <View style={styles.headerInfo}>
          <Text style={styles.unitBadge}>Unit {chapter.id}</Text>
          <Text style={styles.chapterTitle}>{chapter.title}</Text>
          <Text style={styles.chapterDescription}>{chapter.description}</Text>
        </View>
      </View>

      {/* Lesson List Heading */}
      <View style={styles.lessonsSectionHeader}>
        <MaterialIcons name="library-books" size={20} color="#1B4D3E" />
        <Text style={styles.sectionTitle}>
          Lessons in this Unit ({lessons.length})
        </Text>
      </View>

      {/* Lesson Cards */}
      {lessons.map((lesson) => (
        <View key={lesson.id} style={styles.lessonCard}>
          <Image source={lesson.image} style={styles.lessonImage} resizeMode="cover" />
          <View style={styles.lessonInfo}>
            <View style={styles.lessonMetaRow}>
              <View style={styles.lessonPill}>
                <Text style={styles.lessonPillText}>Lesson {lesson.lessonNumber}</Text>
              </View>
              {lesson.estimatedMinutes && (
                <View style={styles.timeBadge}>
                  <MaterialIcons name="schedule" size={12} color="#64748B" />
                  <Text style={styles.timeBadgeText}>{lesson.estimatedMinutes} min</Text>
                </View>
              )}
            </View>
            <Text style={styles.lessonCardTitle}>{lesson.title}</Text>
            <Text style={styles.lessonCardDescription} numberOfLines={2}>
              {lesson.description}
            </Text>
            <TouchableOpacity
              style={styles.openLessonBtn}
              onPress={() => {
                // Navigate dynamically or via legacy name
                navigation.navigate("Lesson", { lessonId: lesson.id });
              }}
              activeOpacity={0.8}
            >
              <MaterialIcons name="menu-book" size={16} color="#FFFFFF" />
              <Text style={styles.openLessonBtnText}>View Lesson</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  contentContainer: {
    padding: 16,
  },
  gameBanner: {
    backgroundColor: "#1B4D3E",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#1B4D3E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  gameBannerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  gameBannerTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  gameBannerSubtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    marginTop: 2,
  },
  headerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  headerImage: {
    width: "100%",
    height: 180,
  },
  headerInfo: {
    padding: 16,
  },
  unitBadge: {
    color: "#27AE60",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 8,
  },
  chapterDescription: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
  },
  lessonsSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
  },
  lessonCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  lessonImage: {
    width: "100%",
    height: 160,
  },
  lessonInfo: {
    padding: 14,
  },
  lessonMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  lessonPill: {
    backgroundColor: "#E8F8F0",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  lessonPillText: {
    color: "#1B4D3E",
    fontSize: 11,
    fontWeight: "700",
  },
  timeBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeBadgeText: {
    fontSize: 11,
    color: "#64748B",
  },
  lessonCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 6,
  },
  lessonCardDescription: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
    marginBottom: 12,
  },
  openLessonBtn: {
    backgroundColor: "#1B4D3E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    borderRadius: 8,
  },
  openLessonBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});
