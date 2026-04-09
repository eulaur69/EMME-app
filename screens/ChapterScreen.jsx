import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CHAPTERS } from "../constants/data";
import { openLink } from "../utils/linking";
import Card from "../components/Card";
import BiggerButton from "../components/BiggerButton";

const ChapterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const chapterId = route.name;
  const chapter = CHAPTERS[chapterId];

  if (!chapter) return null;

  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        {chapter.gameLink && (
          <BiggerButton
            text={chapter.gameText || "CHAPTER GAME"}
            onPress={() => openLink(chapter.gameLink)}
          />
        )}

        {chapter.lessons.map((lesson) => (
          <Card
            key={lesson.id}
            image={lesson.image}
            title={lesson.title}
            description={lesson.description}
            onPress={() => navigation.navigate(lesson.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
  },
});

export default ChapterScreen;
