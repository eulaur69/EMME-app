import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import {
  CHAPTERS,
  GEOPARK_PARTNERS,
  CARBON_FOOTPRINT_URL,
} from "../constants/curriculum";
import { openExternalUrl } from "../utils/linking";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const chaptersList = Object.values(CHAPTERS);

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom", "left", "right"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Hero Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeSubtitle}>Erasmus+ Educational Project</Text>
          <Text style={styles.welcomeTitle}>
            Earth Memories for Modern Earthlings
          </Text>
          <Text style={styles.welcomeDescription}>
            Explore geological heritage, ecology, geoparks, and hands-on environmental stewardship.
          </Text>
        </View>

        {/* Meet Your Geoparks Section */}
        <View style={styles.geoparksCard}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="public" size={20} color="#1B4D3E" />
            <Text style={styles.sectionTitle}>Meet your Geoparks!</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Tap a partner country to discover its UNESCO Global Geoparks:
          </Text>
          <View style={styles.flagsGrid}>
            {GEOPARK_PARTNERS.map((partner) => (
              <TouchableOpacity
                key={partner.country}
                style={styles.flagButton}
                onPress={() => openExternalUrl(partner.url)}
                activeOpacity={0.8}
                accessibilityLabel={`Open ${partner.name}`}
              >
                <View style={styles.flagImageWrapper}>
                  <Image source={partner.flag} style={styles.flagImage} />
                </View>
                <Text style={styles.flagCountryName}>{partner.country}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Curriculum Units Heading */}
        <View style={styles.unitsSectionHeader}>
          <MaterialIcons name="school" size={22} color="#1B4D3E" />
          <Text style={styles.unitsHeading}>Learning Units</Text>
        </View>

        {/* Chapter Cards (1 to 5) */}
        {chaptersList.map((chapter) => (
          <View key={chapter.id} style={styles.unitCard}>
            <Image source={chapter.image} style={styles.unitImage} resizeMode="cover" />
            <View style={styles.unitInfo}>
              <View style={styles.unitHeaderRow}>
                <View style={styles.unitNumberBadge}>
                  <Text style={styles.unitNumberText}>UNIT {chapter.id}</Text>
                </View>
                <View style={styles.lessonCountBadge}>
                  <MaterialIcons name="menu-book" size={13} color="#27AE60" />
                  <Text style={styles.lessonCountText}>
                    {chapter.lessonIds.length} Lessons
                  </Text>
                </View>
              </View>

              <Text style={styles.unitTitle}>{chapter.title}</Text>
              <Text style={styles.unitDescription}>{chapter.description}</Text>

              <TouchableOpacity
                style={styles.exploreButton}
                onPress={() => {
                  navigation.navigate("Chapter", { chapterId: chapter.id });
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.exploreButtonText}>Explore Unit</Text>
                <MaterialIcons name="arrow-forward" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Carbon Footprint Calculator Card */}
        <View style={styles.calculatorCard}>
          <View style={styles.calculatorHeader}>
            <MaterialIcons name="eco" size={26} color="#27AE60" />
            <Text style={styles.calculatorTitle}>Carbon Footprint Calculator</Text>
          </View>
          <Text style={styles.calculatorDesc}>
            Calculate your personal ecological footprint and learn how everyday choices impact planet Earth.
          </Text>
          <TouchableOpacity
            style={styles.calculatorButton}
            onPress={() => openExternalUrl(CARBON_FOOTPRINT_URL)}
            activeOpacity={0.85}
          >
            <Text style={styles.calculatorButtonText}>Open Calculator</Text>
            <MaterialIcons name="open-in-new" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Project Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>EMME • Erasmus+ Strategic Partnership</Text>
          <Text style={styles.footerSubtext}>
            Romania • Portugal • Slovakia • Croatia
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  contentContainer: {
    padding: 16,
  },
  welcomeCard: {
    backgroundColor: "#1B4D3E",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#1B4D3E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  welcomeSubtitle: {
    color: "#A7F3D0",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 6,
  },
  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  welcomeDescription: {
    color: "#E2E8F0",
    fontSize: 14,
    lineHeight: 20,
  },
  geoparksCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 16,
  },
  flagsGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flagButton: {
    alignItems: "center",
    gap: 6,
  },
  flagImageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 2,
    borderColor: "#E2E8F0",
  },
  flagImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  flagCountryName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },
  unitsSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  unitsHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  unitCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  unitImage: {
    width: "100%",
    height: 180,
  },
  unitInfo: {
    padding: 16,
  },
  unitHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  unitNumberBadge: {
    backgroundColor: "#E8F8F0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  unitNumberText: {
    color: "#1B4D3E",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  lessonCountBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  lessonCountText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#475569",
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 6,
  },
  unitDescription: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 19,
    marginBottom: 14,
  },
  exploreButton: {
    backgroundColor: "#1B4D3E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: "#1B4D3E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  exploreButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  calculatorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginTop: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  calculatorHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  calculatorTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  calculatorDesc: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
    marginBottom: 14,
  },
  calculatorButton: {
    backgroundColor: "#27AE60",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
  },
  calculatorButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  footerText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#94A3B8",
  },
  footerSubtext: {
    fontSize: 11,
    color: "#CBD5E1",
    marginTop: 2,
  },
});
