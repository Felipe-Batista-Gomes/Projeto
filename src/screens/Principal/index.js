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
                <h3 style={{ color: "white", fontSize: 20, textAlign: "left" }}>
                  Primeira paisagem
                </h3>
                <p style={{ color: "white", fontSize: 15, textAlign: "left" }}>
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
                <h3 style={{ color: "white", fontSize: 20, textAlign: "left" }}>
                  Segunda paisagem
                </h3>
                <p style={{ color: "white", fontSize: 15, textAlign: "left" }}>
                  Paisagem para testes
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <Text style={styles.title}>Principais pontos turísticos</Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View
            style={{
              marginTop: 10,
              height: 250,
              flexDirection: "row",
              padding: 25,
            }}
          >
            <View style={styles.imgtour}>
              <img
                src="../../../assets/complexo.jpeg"
                style={{ height: "60%", borderRadius: 4 }}
              />
            </View>
            <View style={styles.texttour}>
              <Text style={styles.ponto}>Complexo Esportivo da Rocinha</Text>
              <Text style={styles.desc}>
                O Complexo Esportivo da Rocinha, inaugurado em 2010, é um espaço
                público para esporte e lazer, com quadras poliesportivas, tatame
                para artes marciais, piscina, academia e pista de atletismo. Ele
                promove inclusão social e cultural, oferecendo atividades e
                programas principalmente para os jovens da comunidade,
                tornando-se um local muito frequentado.
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              height: 250,
              flexDirection: "row",
              padding: 25,
            }}
          >
            <View style={styles.imgtour}>
              <img
                src="../../../assets/mirante.jpg"
                style={{ height: "50%", borderRadius: 4 }}
              />
            </View>
            <View style={styles.texttour}>
              <Text style={styles.ponto}>Mirante da Rocinha</Text>
              <Text style={styles.desc}>
                O Mirante da Rocinha é um ponto turístico localizado na Rocinha,
                Rio de Janeiro. De lá, é possível ter uma vista panorâmica
                impressionante da cidade, incluindo o mar, as montanhas e partes
                das zonas Sul e Oeste. O local oferece uma perspectiva única da
                vida na favela, contrastando a beleza natural comm o cenário
                urbano. Além de ser um ponto de observação popular para
                turistas, o mirante também é utilizado pelos moradores como um
                espaço de convivência e lazer. Há ainda uma variedade de opçôes
                gastronômicas populares, com pratos e drinks típicos do Rio.
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              height: 250,
              flexDirection: "row",
              padding: 25,
            }}
          >
            <View style={styles.imgtour}>
              <img
                src="../../../assets/nordestino.png"
                style={{ height: "50%", borderRadius: 4 }}
              />
            </View>
            <View style={styles.texttour}>
              <Text style={styles.ponto}>
                Restaurante Nordestino da Rocinha
              </Text>
              <Text style={styles.desc}>
                O Restaurante Nordestino da Rocinha é um estabelecimento situado
                na comunidade da Rocinha, especializado na culinária típica do
                Nordeste do Brasil. O restauranto oferece uma variedade de
                pratos tradicionais, como feijoada, carne de sol, baião de dois
                e diversas opções de mariscos e frutos do mar. O ambiente é
                acolhedor e tem uma decoração que remete à cultura nordestina,
                proporcionando uma experiência autêntica da gastronomia e da
                cultura do Nordeste para os moradores e visitantes da
                comunidade.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ponto: {
    fontSize: 15,
  },
  loigo: {
    alignItems: "center",
    width: "60%",
    height: "60%",
  },
  desc: {
    fontSize: 9,
  },
  texttour: {
    width: "50%",
    marginLeft: 8,
  },
  imgtour: {
    width: "50%",
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
