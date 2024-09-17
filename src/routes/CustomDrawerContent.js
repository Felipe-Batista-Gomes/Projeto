import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");

    navigation.navigate("Login");
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Pressable
          onPress={handleLogout}
          style={{
            backgroundColor: "red",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
