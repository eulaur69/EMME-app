import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "../screens/HomeScreen";
import { ChapterScreen } from "../screens/ChapterScreen";
import { LessonScreen } from "../screens/LessonScreen";
import { AppHeader } from "../components/AppHeader";

const Stack = createNativeStackNavigator();

// Backwards-compatible Chapter wrappers
const Details1Screen = () => <ChapterScreen defaultChapterId={1} />;
const Details2Screen = () => <ChapterScreen defaultChapterId={2} />;
const Details3Screen = () => <ChapterScreen defaultChapterId={3} />;
const Details4Screen = () => <ChapterScreen defaultChapterId={4} />;
const Details5Screen = () => <ChapterScreen defaultChapterId={5} />;

// Backwards-compatible Lesson wrappers (All 19)
const Details1_1Screen = () => <LessonScreen defaultLessonId="1_1" />;
const Details1_2Screen = () => <LessonScreen defaultLessonId="1_2" />;
const Details1_3Screen = () => <LessonScreen defaultLessonId="1_3" />;
const Details1_4Screen = () => <LessonScreen defaultLessonId="1_4" />;

const Details2_1Screen = () => <LessonScreen defaultLessonId="2_1" />;
const Details2_2Screen = () => <LessonScreen defaultLessonId="2_2" />;
const Details2_3Screen = () => <LessonScreen defaultLessonId="2_3" />;
const Details2_4Screen = () => <LessonScreen defaultLessonId="2_4" />;
const Details2_5Screen = () => <LessonScreen defaultLessonId="2_5" />;

const Details3_1Screen = () => <LessonScreen defaultLessonId="3_1" />;
const Details3_2Screen = () => <LessonScreen defaultLessonId="3_2" />;
const Details3_3Screen = () => <LessonScreen defaultLessonId="3_3" />;
const Details3_4Screen = () => <LessonScreen defaultLessonId="3_4" />;

const Details4_1Screen = () => <LessonScreen defaultLessonId="4_1" />;
const Details4_2Screen = () => <LessonScreen defaultLessonId="4_2" />;
const Details4_3Screen = () => <LessonScreen defaultLessonId="4_3" />;
const Details4_4Screen = () => <LessonScreen defaultLessonId="4_4" />;

const Details5_1Screen = () => <LessonScreen defaultLessonId="5_1" />;
const Details5_2Screen = () => <LessonScreen defaultLessonId="5_2" />;

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#1B4D3E",
            headerTitleAlign: "center",
            headerTitle: () => <AppHeader />,
            headerBackTitle: "Back",
          }}
        >
          {/* Main Routes */}
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />

          <Stack.Screen
            name="Chapter"
            component={ChapterScreen}
            options={{ title: "Unit Details" }}
          />

          <Stack.Screen
            name="Lesson"
            component={LessonScreen}
            options={{ title: "Lesson Details" }}
          />

          {/* Backwards-Compatible Chapter Routes */}
          <Stack.Screen name="Details1" component={Details1Screen} />
          <Stack.Screen name="Details2" component={Details2Screen} />
          <Stack.Screen name="Details3" component={Details3Screen} />
          <Stack.Screen name="Details4" component={Details4Screen} />
          <Stack.Screen name="Details5" component={Details5Screen} />

          {/* Backwards-Compatible Lesson Routes (All 19) */}
          <Stack.Screen name="Details1_1" component={Details1_1Screen} />
          <Stack.Screen name="Details1_2" component={Details1_2Screen} />
          <Stack.Screen name="Details1_3" component={Details1_3Screen} />
          <Stack.Screen name="Details1_4" component={Details1_4Screen} />

          <Stack.Screen name="Details2_1" component={Details2_1Screen} />
          <Stack.Screen name="Details2_2" component={Details2_2Screen} />
          <Stack.Screen name="Details2_3" component={Details2_3Screen} />
          <Stack.Screen name="Details2_4" component={Details2_4Screen} />
          <Stack.Screen name="Details2_5" component={Details2_5Screen} />

          <Stack.Screen name="Details3_1" component={Details3_1Screen} />
          <Stack.Screen name="Details3_2" component={Details3_2Screen} />
          <Stack.Screen name="Details3_3" component={Details3_3Screen} />
          <Stack.Screen name="Details3_4" component={Details3_4Screen} />

          <Stack.Screen name="Details4_1" component={Details4_1Screen} />
          <Stack.Screen name="Details4_2" component={Details4_2Screen} />
          <Stack.Screen name="Details4_3" component={Details4_3Screen} />
          <Stack.Screen name="Details4_4" component={Details4_4Screen} />

          <Stack.Screen name="Details5_1" component={Details5_1Screen} />
          <Stack.Screen name="Details5_2" component={Details5_2Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
