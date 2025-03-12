import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1f1c18",
          borderTopWidth: 0,
          height: 60,
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "#4CA1AF",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>🏠</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="chat-list"
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>💬</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          tabBarLabel: "Test",
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>🧪</Text>
          ),
        }}
      />
    </Tabs>
  );
}
