import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const chats = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
];

const ChatList = () => {
  return (
    <View className="flex-1 bg-gray-800 p-4">
      <Text className="text-white text-2xl font-bold mb-4">Chats</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/chat/${item.id}`} asChild>
            <TouchableOpacity className="bg-gray-700 p-4 rounded-lg mb-2">
              <Text className="text-white">{item.name}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

export default ChatList;
