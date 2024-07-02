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

export default function Registro() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>Nossa</Text>
        <Image source={"assets/logo.png"} style={styles.logo} />
        <Text style={styles.titulo}>Registro</Text>

        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
        ></TextInput>

        <TextInput
          placeholder="Digite seu nome completo"
          style={styles.input}
        ></TextInput>

        <TextInput
          placeholder="Digite o nome de usuário"
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
      </View>
      <View style={styles.container2}>
        <Pressable style={styles.botao}>
          <Text style={styles.buttxt}>Registrar</Text>
        </Pressable>
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
            Já tem uma conta?
            <Text style={{ color: "red" }}> Faça o Login!</Text>
          </Text>
        </Pressable>
      </View>
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
  },
});
