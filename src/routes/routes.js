import React, { useEffect, useState, useMemo, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import Prob from "../screens/Prob";
import Login from "../screens/Login";
import Local from "../screens/Local";
import Perfil from "../screens/Perfil";
import Registro from "../screens/Registro";
import Principal from "../screens/Principal";
import Configuracoes from "../screens/Configuracoes";
import CustomDrawerContent from "./CustomDrawerContent";
import DarkTheme from "../themes/darktheme";
import LightTheme from "../themes/lighttheme";
import AppContext from "../themes/AppContext";

const Drawer = createDrawerNavigator();

export default function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const { t } = useTranslation();
  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
      <Drawer.Navigator
        initialRouteName={isLoggedIn ? "Principal" : "Login"}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: isDarkTheme ? DarkTheme.colors.background : LightTheme.colors.background
          },
          headerTintColor: isDarkTheme ? LightTheme.colors.background : DarkTheme.colors.background,
          headerStyle: {
            backgroundColor: isDarkTheme ? DarkTheme.colors.background : LightTheme.colors.background
          },
        }}
      >
        <Drawer.Screen
          name="Principal"
          component={Principal}
          options={{ headerTitle: t("homeScreenTitle")}}
        />
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerTitle: t("profileScreenTitle") }}
        />
        <Drawer.Screen
          name="Configurações"
          component={Configuracoes}
          options={{ headerTitle: t("settingsScreenTitle") }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="Registro"
          component={Registro}
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="Prob"
          component={Prob}
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="Local"
          component={Local}
          options={{
            drawerItemStyle: { display: "none" },
            headerTitle: t("localScreenTitle"),
          }}
        />
      </Drawer.Navigator>
  );
}