import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import Toast from "react-native-toast-message";

const handleRegister = (fullName, username, email, password, navigation) => {
  fetch("https://backend-ornz.onrender.com/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: fullName,
      username: username,
      email: email,
      password: password,
    }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Registration failed");
      }
      return response.json();
    })
    .then(() => {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Registration successful!",
      });
      navigation.navigate("Login");
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error.message || "An error occurred during registration.",
      });
    });
};

export default function Registro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        <View style={styles.container2}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.titulo}>Registro</Text>

          <TextInput
            placeholder="Digite seu email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Digite seu nome completo"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />

          <TextInput
            placeholder="Digite o nome de usuário"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            placeholder="Digite sua senha"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.container2}>
          <Pressable
            style={styles.botao}
            onPress={() =>
              handleRegister(fullName, username, email, password, navigation)
            }
          >
            <Text style={styles.buttxt}>Registrar</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{
              alignItems: "center",
              width: 300,
              marginTop: 25,
              padding: 5,
              borderRadius: 5,
              backgroundColor: "white",
              text: "black",
              padding: 10,
              borderWidth: 1,
            }}
          >
            <Text style={{ backgroundColor: "white" }}>
              Já tem uma conta?
              <Text style={{ color: "red" }}> Faça o Login!</Text>
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
    borderColor: "black",
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
    text: "white",
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
