import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  Pressable,
  ScrollView
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Prob() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
      <View style={styles.container2}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.titulo}>Não consegue logar?</Text>
        <Text style={{ color: "grey", paddingBottom: 10, fontSize: 13 }}>
          Informe seu email, e te mandaremos um código para redefinir sua senha.
        </Text>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
        ></TextInput>
        <Pressable style={styles.botao}>
          <Text style={styles.buttxt}>Enviar código</Text>
        </Pressable>
        <Text style={{ color: "grey", padding: 20, paddingBottom: 0 }}>Ou</Text>
      </View>
      <View style={styles.container2}>
        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.botao}
        >
          <Text style={styles.buttxt}>Voltar à tela de login</Text>
        </Pressable>
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
            text: "black",
            padding: 10,
            borderWidth: 1,
          }}
        >
          <Text style={{ backgroundColor: "white", color: "red" }}>
            Criar uma nova conta
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
  },
});
