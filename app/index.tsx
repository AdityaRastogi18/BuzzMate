import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "../assets/css/global.css";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
import React from "react";

// interface CustomButtonProps {
//   onPress: () => void;
//   title: string;
//   textStyle?: string;
//   containerStyle?: string;
// }

// const CustomButton = ({
//   onPress,
//   title,
//   textStyle = "",
//   containerStyle = "",
// }: CustomButtonProps) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.7}
//       //   style={styles.button}
//       className="bg-white rounded-xl min-h-[62px] justify-center items-center"
//       onPress={onPress}
//     >
//       <Text className={`font-semibold text-lg text-white  ${textStyle}`}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );
// };

const App = () => {
  return (
    <View className="flex-1">
      <LinearGradient
        className="flex-1 justify-center items-center w-full"
        colors={["#3a6186", "#89253e"]}
      >
        <SafeAreaView>
          <Text className="text-white">Hello Native!</Text>
          <CustomButton
            onPress={() => console.log("button tapped")}
            title="Click me"
          />
          <StatusBar style="dark" />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default App;
