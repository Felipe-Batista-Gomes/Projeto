import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  Pressable,
} from "react-native";

export default function ListUsers() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={require(".assetslogo.png")} />
        <Text style={styles.titulo}>Login</Text>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
        ></TextInput>
        <Text
          style={{
            color: "darkblue",
            borderBottomWidth: 1,
            borderColor: "darkblue",
          }}
        >
          Esqueceu sua senha?
        </Text>
        <Pressable style={styles.botao}>
          <Text style={styles.buttxt}>Entrar</Text>
        </Pressable>
      </View>
      <View style={styles.container2}>
        <Pressable
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
            Não tem uma conta?
            <Text style={{ color: "red" }}> Registre-se!</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
  },
  input: {
    width: 300,
    marginTop: 25,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  botao: {
    alignItems: "center",
    width: 300,
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
});
