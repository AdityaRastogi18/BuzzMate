import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, statusBarStyle: "light" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[ChatRoomId]" />
    </Stack>
  );
};

export default ChatLayout;
