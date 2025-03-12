import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
// import tw from "../lib/tailwind"; // Import Tailwind helper

export default function RootLayout() {
  return (
    <SafeAreaView className={`flex-1 bg-gray-900`}>
      <StatusBar style="dark" />

      {/* Main Stack Navigator */}
      <Stack
        screenOptions={{
          headerShown: false, // Hide header globally
          animation: "slide_from_right", // Smooth transitions
          // statusBarStyle: "auto",
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="auth" />
        {/* <Stack.Screen name="auth/login" /> */}
        {/* <Stack.Screen name="auth/register" /> */}
      </Stack>
    </SafeAreaView>
  );
}
