import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TextInput,
  Pressable,
  div,
  ScrollView,
} from "react-native";

import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import { useNavigation } from "@react-navigation/native";

export default function Principal() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={false}>
        <Pressable style={styles.bolinha1}>
          <Image
            style={styles.loigo}
            source={require("../../../assets/pesquisa.png")}
          />
        </Pressable>

        <Pressable
          style={styles.bolinha2}
          onPress={() => {
            navigation.navigate("Perfil");
          }}
        >
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

        <div
          style={{
            display: "block",
            width: "80%",
            height: "50%",
            padding: 30,
            marginTop: 110,
          }}
        >
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                style={styles.carrossel}
                src="../../../assets/paisagem.jpg"
                alt="download"
              />
              <Carousel.Caption>
                <h3 style={{color: "red", fontSize: 12}}>Primeira paisagem</h3>
                <p style={{color: "red", fontSize: 10}}>Paisagem para testes</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                style={styles.carrossel}
                src="../../../assets/paisagem2.jpg"
                alt="usuario"
              />
              <Carousel.Caption>
                <h3 style={{color: "red", fontSize: 12}}>Segunda paisagem</h3>
                <p style={{color: "red", fontSize: 10}}>Paisagem para testes</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loigo: {
    alignItems: "center",
    width: "60%",
    height: "60%",
  },
  carrossel:{
    width: 250,
    height: 200,
    objectFit: "cover",
  },
  config: {
    marginLeft: "85%",
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
