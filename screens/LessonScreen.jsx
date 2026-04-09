import React from "react";
import { useRoute } from "@react-navigation/native";
import { CHAPTERS } from "../constants/data";
import PdfWebView from "../components/PdfWebView";

const LessonScreen = () => {
  const route = useRoute();
  const lessonId = route.name;

  // Find the lesson in all chapters
  let lesson = null;
  for (const chapterKey in CHAPTERS) {
    lesson = CHAPTERS[chapterKey].lessons.find((l) => l.id === lessonId);
    if (lesson) break;
  }

  if (!lesson) return null;

  return <PdfWebView url={lesson.pdfUrl} />;
};

export default LessonScreen;
