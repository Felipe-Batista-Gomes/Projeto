import Prob from "../screens/Prob";
import Login from "../screens/Login";
import Local from "../screens/Local";
import Perfil from "../screens/Perfil";
import Registro from "../screens/Registro";
import Principal from "../screens/Principal";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomDrawerContent from "./CustomDrawerContent";
import Configuracoes from "../screens/Configacoes";

const Drawer = createDrawerNavigator();

export default function Routes() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={isLoggedIn ? "Principal" : "Login"}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Principal"
          component={Principal}
          options={{ headerTitle: "Tela Principal" }}
        />
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerTitle: "Tela do Perfil" }}
        />
        <Drawer.Screen
          name="Configurações"
          component={Configuracoes}
          options={{ headerTitle: "Tela de Configurações" }}
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
          options={{ drawerItemStyle: { display: "none" }, headerTitle: "Tela de Estabelecimento" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
