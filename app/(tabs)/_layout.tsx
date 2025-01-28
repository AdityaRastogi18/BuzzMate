import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "#4CA1AF",
        tabBarInactiveTintColor: "#f9f9f9",
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tabs.Screen name="chat-list" options={{ tabBarLabel: "Chat List" }} />
      <Tabs.Screen name="test" options={{ tabBarLabel: "Home" }} />
    </Tabs>
  );
};

export default TabsLayout;
