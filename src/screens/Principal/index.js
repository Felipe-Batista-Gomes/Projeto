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

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { useNavigation } from "@react-navigation/native";

export default function Principal() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.bolinha1}>
        <Image
          style={styles.loigo}
          source={require("../../../assets/pesquisa.png")}
        />
      </Pressable>

      <Pressable style={styles.bolinha2}
        onPress={() => {
          navigation.navigate("Perfil")
        }}>
        <Image
          style={styles.loigo}
          source={require("../../../assets/usuario.png")}
        />
      </Pressable>

      <Pressable style={styles.bolinha3}>
        <Image
          style={styles.loigo}
          source={require("../../../assets/download.png")}
        />
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate("Configuracoes");
          }}
      >
        <Image
          source={require("../../../assets/config.png")}
          style={styles.config}
        />
      </Pressable>
      <View style={styles.fotoperfilG}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  loigo: {
    alignItems: "center",
    width: "60%",
    height: "60%",
  },
  config: {
    marginLeft: "80%",
    marginTop: 10,
    width: 50,
    height: 50,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bolinha1: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#FA473C",
    marginLeft: "5%",
    marginTop: 10,
    width: 50,
    height: 50,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bolinha2: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#FFC222",
    marginLeft: "20%",
    marginTop: 10,
    width: 50,
    height: 50,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bolinha3: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#48B828",
    marginLeft: "35%",
    marginTop: 10,
    width: 50,
    height: 50,
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
