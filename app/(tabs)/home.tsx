import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { randomChatRooms } from "@/constants/List";

export default function HomeScreen() {
  const router = useRouter();
  const [chatRooms, setChatRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChatRooms();
  }, []);

  // 🔹 Load Chat Rooms from Local Storage or API
  const loadChatRooms = async () => {
    try {
      const storedRooms = await AsyncStorage.getItem("chatRooms");
      if (storedRooms) {
        setChatRooms(JSON.parse(storedRooms));
      } else {
        // fetchChatRooms(); // Fetch from API if not in storage
        // const randomChatRooms = [
        //   { id: 1, name: "Tech Geeks" },
        //   { id: 2, name: "Movie Lovers" },
        //   { id: 3, name: "Crypto Talks" },
        //   { id: 4, name: "Startup Founders" },
        //   { id: 5, name: "Gaming Hub" },
        // ];
        setChatRooms(randomChatRooms);
        await AsyncStorage.setItem(
          "chatRooms",
          JSON.stringify(randomChatRooms)
        );
      }
    } catch (error) {
      console.error("Error loading chat rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch Chat Rooms from API
  const fetchChatRooms = async () => {
    try {
      const response = await fetch("https://api.example.com/chat-rooms");
      const data = await response.json();
      setChatRooms(data);
      await AsyncStorage.setItem("chatRooms", JSON.stringify(data));
    } catch (error) {
      console.error("API Fetch Error:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-4">
      <Text className="text-white text-2xl font-bold">Chat Rooms</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4ca1af" className="mt-10" />
      ) : chatRooms.length > 0 ? (
        <FlatList
          data={chatRooms}
          keyExtractor={(item) => item.id.toString()}
          className="mt-5"
          renderItem={({ item }) => (
            <TouchableOpacity
              className="p-4 bg-gray-800 rounded-lg my-2"
              onPress={() => router.push(`/chat/${item.id}`)}
            >
              <Text className="text-white text-lg">{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text className="text-gray-400 mt-5">No chat rooms available.</Text>
      )}
    </SafeAreaView>
  );
}
