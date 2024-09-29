import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("Login");
  };

  return (
    <DrawerContentScrollView {...props}>
      <View>
        {Object.keys(props.descriptors).map((key) => {
          const { options, navigation, route } = props.descriptors[key];
          const isHidden = options.drawerItemStyle?.display === "none";

          // Only show items that are not hidden (with drawerItemStyle: { display: "none" })
          if (!isHidden) {
            return (
              <Pressable
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderBottomWidth: 1,
                  borderColor: "#ccc",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  {options.headerTitle || route.name}
                </Text>
              </Pressable>
            );
          }
        })}
      </View>

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
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {t("logoutButton")}
          </Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;