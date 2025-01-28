import AppGradient from "@/components/AppGradient";
import CustomButton from "@/components/CustomButton";
import { ChatListData } from "@/constants/List";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const ChatList = () => {
  return (
    <AppGradient colors={["#2c3e50", "#4ca1af"]}>
      {/* <View className=""> */}
      <FlatList
        data={ChatListData}
        keyExtractor={(item) => item.id.toString()}
        className=""
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CustomButton
            title={item?.name}
            onPress={() => console.log(`Chat Room: ${item.id} was pressed`)}
            containerStyle="my-3"
            textStyle="text-blue-500"
          />
        )}
      />
      {/* </View> */}
    </AppGradient>
  );
};

export default ChatList;
