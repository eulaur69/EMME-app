import * as FileSystem from "expo-file-system/legacy";
import * as Sharing from "expo-sharing";
import { LESSONS } from "../constants/curriculum";

const LESSONS_DIR = `${FileSystem.documentDirectory}lessons/`;

async function ensureLessonsDirectory(): Promise<void> {
  const dirInfo = await FileSystem.getInfoAsync(LESSONS_DIR);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(LESSONS_DIR, { intermediates: true });
  }
}

export function getLocalLessonPdfUri(lessonId: string): string {
  return `${LESSONS_DIR}lesson_${lessonId}.pdf`;
}

export function getDirectDownloadUrl(googleId: string): string {
  return `https://drive.usercontent.google.com/download?id=${googleId}&export=download`;
}

export async function isLessonCached(lessonId: string): Promise<boolean> {
  try {
    const fileUri = getLocalLessonPdfUri(lessonId);
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    return fileInfo.exists && (fileInfo.size ?? 0) > 1000;
  } catch (err) {
    console.warn(`Error checking cache for lesson ${lessonId}:`, err);
    return false;
  }
}

export async function downloadAndCacheLessonPdf(
  lessonId: string,
  onProgress?: (progress: number) => void
): Promise<string> {
  await ensureLessonsDirectory();
  const lesson = LESSONS[lessonId];
  if (!lesson) {
    throw new Error(`Lesson ${lessonId} not found`);
  }

  const localUri = getLocalLessonPdfUri(lessonId);
  const downloadUrl = getDirectDownloadUrl(lesson.pdfGoogleId);

  // If already cached, return immediately
  const cached = await isLessonCached(lessonId);
  if (cached) {
    if (onProgress) onProgress(1);
    return localUri;
  }

  const downloadResumable = FileSystem.createDownloadResumable(
    downloadUrl,
    localUri,
    {},
    (downloadProgress) => {
      if (onProgress && downloadProgress.totalBytesExpectedToWrite > 0) {
        const progress =
          downloadProgress.totalBytesWritten /
          downloadProgress.totalBytesExpectedToWrite;
        onProgress(Math.min(Math.max(progress, 0), 1));
      }
    }
  );

  const result = await downloadResumable.downloadAsync();
  if (!result || !result.uri) {
    throw new Error("Download failed, please check your internet connection.");
  }

  // Verify file size
  const info = await FileSystem.getInfoAsync(result.uri);
  if (!info.exists || (info.size ?? 0) < 1000) {
    await FileSystem.deleteAsync(result.uri, { idempotent: true });
    throw new Error("Downloaded document appears empty or corrupt. Please retry.");
  }

  return result.uri;
}

export async function shareOrOpenInNativePdfApp(lessonId: string): Promise<void> {
  const lesson = LESSONS[lessonId];
  if (!lesson) return;

  const isAvailable = await Sharing.isAvailableAsync();
  if (!isAvailable) {
    throw new Error("Sharing or external document viewing is not supported on this device.");
  }

  let fileUri = getLocalLessonPdfUri(lessonId);
  const cached = await isLessonCached(lessonId);
  if (!cached) {
    fileUri = await downloadAndCacheLessonPdf(lessonId);
  }

  await Sharing.shareAsync(fileUri, {
    mimeType: "application/pdf",
    dialogTitle: `Open ${lesson.title}`,
    UTI: "com.adobe.pdf",
  });
}
