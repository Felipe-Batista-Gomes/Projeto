import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "../../themes/AppContext";
import DarkTheme from "../../themes/darktheme";
import LightTheme from "../../themes/lighttheme";

export default function Login() {
  const navigation = useNavigation();

  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("https://backend-ornz.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || "Login failed");
        }
        return response.json();
      })
      .then(async (data) => {
        await AsyncStorage.setItem("token", data.token);
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Login successful!",
        });
        navigation.navigate("Principal");
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message || "An error occurred during login.",
        });
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        <View style={styles.container2}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={[styles.titulo, {color: isDarkTheme ? "#FFF" : "black"}]}>Login</Text>
          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor={isDarkTheme ? "#FFF" : "darkgrey"}
            style={[styles.input, {borderColor: isDarkTheme ? "#FFF" : "black", color: isDarkTheme ? "#FFF" : "black"}]}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor={isDarkTheme ? "#FFF" : "darkgrey"}
            style={[styles.input, {borderColor: isDarkTheme ? "#FFF" : "black", color: isDarkTheme ? "#FFF" : "black"}]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <Pressable
            onPress={() => {
              navigation.navigate("Prob");
            }}
            style={{
              backgroundColor: "white",
              color: "darkblue",
              borderBottomWidth: 1,
              borderColor: "darkblue",
            }}
          >
            <Text style={{ color: "darkblue", backgroundColor: isDarkTheme ? DarkTheme.colors.background : LightTheme.colors.background}}>Esqueceu sua senha?</Text>
          </Pressable>

          <Pressable onPress={handleLogin} style={styles.botao}>
            <Text style={styles.buttxt}>Entrar</Text>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <Pressable
            onPress={() => {
              navigation.navigate("Registro");
            }}
            style={{
              alignItems: "center",
              width: 300,
              marginTop: 25,
              padding: 5,
              borderRadius: 5,
              backgroundColor: "white",
              padding: 10,
              borderWidth: 1,
            }}
          >
            <Text style={{ backgroundColor: "white" }}>
              Não tem uma conta?
              <Text style={{ color: "red" }}> Registre-se!</Text>
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
  },
  input: {
    width: 300,
    height: 50,
    marginTop: 25,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  botao: {
    alignItems: "center",
    width: 300,
    height: 50,
    marginTop: 25,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "red",
    padding: 10,
  },
  buttxt: {
    color: "white",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: 50,
  },
});
