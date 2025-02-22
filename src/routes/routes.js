import React, { useEffect, useState, useMemo, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { Icon } from "react-native-vector-icons/FontAwesome";

import Prob from "../screens/Prob";
import Login from "../screens/Login";
import Local from "../screens/Local";
import Perfil from "../screens/Perfil";
import Registro from "../screens/Registro";
import Principal from "../screens/Principal";
import Configuracoes from "../screens/Configuracoes";
import AddLocal from "../screens/AddLocal";
import Animacao from "../screens/Animacao"
import CustomDrawerContent from "./CustomDrawerContent";
import DarkTheme from "../themes/darktheme";
import LightTheme from "../themes/lighttheme";
import AppContext from "../themes/AppContext";
import Conversa from "../screens/Conversa";

const Drawer = createDrawerNavigator();

export default function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const { t } = useTranslation();
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);

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
<<<<<<< HEAD
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
        name="Tela Inicial"
        component={Animacao}
        options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
      />
      <Drawer.Screen
        name="Principal"
        component={Principal}
        options={{ headerTitle: t("homeScreenTitle") }}
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
        name="Adicionar Local"
        component={AddLocal}
        options={{ headerTitle: t("addPlaceScreenTitle") }}
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
      <Drawer.Screen
        name="Speak"
        component={Conversa}
        options={{ headerTitle: t("Acessibilidade") }}
      />
    </Drawer.Navigator>
=======
      <Drawer.Navigator
        initialRouteName={isLoggedIn ? "Principal" : "Tela Inicial"}
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
          name="Tela Inicial"
          component={Animacao}
          options={{ headerShown: false, drawerItemStyle: {display: "none"}}}
        />
      
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
          name="Adicionar Local"
          component={AddLocal}
          options={{ headerTitle: t("addPlaceScreenTitle") }}
        />
        <Drawer.Screen
          name="Animações"
          component={Animacao}
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
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
>>>>>>> 2105956a95bd615c1fdb7320df49f7e5c0f0cefe
  );
}