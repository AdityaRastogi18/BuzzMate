import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import Content from "./Content";
import { StatusBar } from "expo-status-bar";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: [string, string, ...string[]];
}) => {
  return (
    <LinearGradient
      colors={colors}
      className="flex-1 justify-center items-center w-full "
    >
      <Content>{children}</Content>
      <StatusBar style="dark" />
    </LinearGradient>
  );
};

export default AppGradient;
