import { Text, View } from "react-native";
import "../assets/css/global.css";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import React from "react";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      className={`flex-1 items-center justify-center bg-gray-900 gap-5`}
    >
      <Text className={`text-white text-3xl font-bold`}>
        Welcome to the App
      </Text>
      <CustomButton
        // className={`mt-5 px-6 py-3 bg-blue-500 rounded-lg`}
        onPress={() => router.push("/(tabs)/home")}
        title="Go to Home"
      />
      <CustomButton
        // className={`mt-5 px-6 py-3 bg-blue-500 rounded-lg`}
        onPress={() => router.push("/auth/login")}
        title="Login"
      />
      {/* <Text className={`text-white text-lg`}>Go to Home</Text> */}
      {/* </CustomButton> */}
    </SafeAreaView>
  );
};

export default App;
