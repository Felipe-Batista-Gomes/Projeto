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
            width: "100%",
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
                alt="Paisagem"
              />
              <Carousel.Caption>
                <h3 style={{ color: "red", fontSize: 20, textAlign: "left" }}>
                  Primeira paisagem
                </h3>
                <p style={{ color: "red", fontSize: 15, textAlign: "left" }}>
                  Paisagem para testes
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                style={styles.carrossel}
                src="../../../assets/paisagem2.jpg"
                alt="Paisagem 2"
              />
              <Carousel.Caption>
                <h3 style={{ color: "red", fontSize: 20, textAlign: "left" }}>
                  Segunda paisagem
                </h3>
                <p style={{ color: "red", fontSize: 15, textAlign: "left" }}>
                  Paisagem para testes
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Text style={styles.title}>Principais pontos turísticos</Text>

        <View
          style={{
            marginTop: 50,
            height: 150,
            flexDirection: "row",
            marginLeft: 30,
          }}
        >
          <View style={styles.imgtour}>
            <img
              src="../../../assets/paisagem2.jpg"
              style={{ height: "100%", borderRadius: 4 }}
            />
          </View>
          <View style={styles.texttour}>
            <Text style={styles.ponto}>Principais pontos turísticos</Text>
            <Text style={styles.desc}>Desc</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            height: 150,
            flexDirection: "row",
            marginLeft: 30,
          }}
        >
          <View style={styles.imgtour}>
            <img
              src="../../../assets/paisagem2.jpg"
              style={{ height: "100%", borderRadius: 4 }}
            />
          </View>
          <View style={styles.texttour}>
            <Text style={styles.ponto}>Principais pontos turísticos</Text>
            <Text style={styles.desc}>Desc</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            height: 150,
            flexDirection: "row",
            marginLeft: 30,
          }}
        >
          <View style={styles.imgtour}>
            <img
              src="../../../assets/paisagem2.jpg"
              style={{ height: "100%", borderRadius: 4 }}
            />
          </View>
          <View style={styles.texttour}>
            <Text style={styles.ponto}>Principais pontos turísticos</Text>
            <Text style={styles.desc}>Desc</Text>
          </View>
        </View>
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
  ponto: {
    fontSize: 15,
  },
  desc: {
    fontSize: 15,
  },
  texttour: {
    width: "60%",
    marginLeft: 15,
  },
  imgtour: {
    width: "40%",
    backgroundColor: "#51C2E8",
    borderRadius: 4,
  },
  carrossel: {
    height: 300,
    objectFit: "fill",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    fontFamily: "sans-serif",
    borderTopWidth: 2,
    borderTopColor: "grey",
    padding: 10,
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
