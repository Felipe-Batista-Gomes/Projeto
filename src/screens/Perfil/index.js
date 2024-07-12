import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  Pressable,
  Input,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container2}></View>
        </View>

        <Text style={{ marginTop: 60, marginLeft: 40, fontSize: 30 }}>
          Seu nome
        </Text>

        <Text
          style={{
            marginTop: 60,
            marginLeft: 30,
            marginRight: 30,
            fontSize: 20,
            height: 300,
            borderWidth: 3,
            borderColor: "black",
            padding: 10,
          }}
        >
          Sua descrição
        </Text>

        <Text
          style={{
            marginTop: 60,
            fontSize: 20,
            height: 300,
            borderWidth: 3,
            borderColor: "black",
            padding: 20,
          }}
        >
          Sua descrição2
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    height: 300,
    width: "100%",
  },
  container2: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#51C2E8",
    marginLeft: "5%",
    marginTop: 200,
    width: 150,
    height: 150,
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
