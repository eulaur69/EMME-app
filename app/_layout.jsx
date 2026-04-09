import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CHAPTERS } from "../constants/data";
import HomeScreen from "../screens/HomeScreen";
import ChapterScreen from "../screens/ChapterScreen";
import LessonScreen from "../screens/LessonScreen";
import HeaderText from "../components/HeaderText";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          headerTintColor: "black",
        }}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HeaderText />,
            headerTitleAlign: "center",
            title: "Home",
            headerTintColor: "#fff",
          }}
        />

        {/* Dynamic Chapter Screens */}
        {Object.keys(CHAPTERS).map((chapterId) => (
          <React.Fragment key={chapterId}>
            <Stack.Screen
              name={chapterId}
              component={ChapterScreen}
              options={{
                headerTitle: () => <HeaderText />,
                headerTitleAlign: "center",
                title: "Details",
              }}
            />
            {/* Dynamic Lesson Screens for each Chapter */}
            {CHAPTERS[chapterId].lessons.map((lesson) => (
              <Stack.Screen
                key={lesson.id}
                name={lesson.id}
                component={LessonScreen}
                options={{
                  headerTitle: () => <HeaderText />,
                  headerTitleAlign: "center",
                  title: "Details",
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default RootStack;
