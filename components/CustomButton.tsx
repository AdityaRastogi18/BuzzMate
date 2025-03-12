import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
// import "../assets/css/global.css";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyle?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyle = "",
  containerStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      //   style={styles.button}
      className={`bg-white rounded-xl min-h-[62px] min-w-[50%] px-2.5 justify-center items-center ${containerStyle}`}
      onPress={onPress}
    >
      <Text className={`font-bold text-cyan-500 text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "white",
//     borderRadius: "52px",
//     borderTopEndRadius: "100px",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

export default CustomButton;
