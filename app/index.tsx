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
    <View className="flex-1">
      <AppGradient colors={["#89253e", "#3a6186"]}>
        <Text className="text-white text-center text-3xl font-bold mx-5 ">
          Hello Native!
        </Text>
        <CustomButton
          onPress={() => router.push("/chat-list")}
          title="Open Chat List"
        />
      </AppGradient>
    </View>
  );
};

export default App;
