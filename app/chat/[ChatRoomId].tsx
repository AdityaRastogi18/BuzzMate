import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { randomChatRooms } from "@/constants/List";

const ChatRoom = () => {
  const { ChatRoomId } = useLocalSearchParams();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Chat Room ${ChatRoomId}`,
    });
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const savedMessages = await AsyncStorage.getItem(`chat_${ChatRoomId}`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
    const newMessages = [...messages, { text: message, sender: "Me" }];
    setMessages(newMessages);
    setMessage("");
    await AsyncStorage.setItem(
      `chat_${ChatRoomId}`,
      JSON.stringify(newMessages)
    );
    console.log(newMessages);
  };

  return (
    <View className="flex-1 bg-gray-800">
      {/* Header */}
      <View className="flex-row items-center p-4 bg-gray-900">
        <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
          <ArrowLeftIcon size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold ml-2">
          {randomChatRooms[ChatRoomId - 1].name}
        </Text>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            className={`p-3 my-2 rounded-lg ${
              item.sender === "Me" ? "bg-blue-500 self-end" : "bg-gray-600"
            }`}
          >
            <Text className="text-white">{item.text}</Text>
          </View>
        )}
        className="flex-1 p-4"
        inverted
      />

      {/* Input Box */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-row bg-gray-900 p-4">
          <TextInput
            className="flex-1 bg-gray-700 text-white p-3 rounded-lg"
            placeholder="Type a message..."
            placeholderTextColor="#bbb"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity
            onPress={sendMessage}
            className="ml-2 bg-blue-600 p-3 rounded-lg"
          >
            <Text className="text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatRoom;
