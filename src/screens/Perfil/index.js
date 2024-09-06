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

import { Rating } from "react-native-ratings";

import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();
  const ratingo = 3.5;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={false}>
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              marginTop: 55,
              marginRight: 20,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
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
          </View>
          <View style={styles.fotoperfilG}></View>
        </View>

        <Text style={{ marginTop: 400, marginLeft: 40, fontSize: 30 }}>
          Seu nome
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginLeft: 50,
            marginRight: 30,
            fontSize: 20,
            height: 100,
            padding: 10,
            color: "#393D40"
          }}
        >
          Sua descrição
        </Text>
        <Text
          style={{
            fontSize: 24,
            borderColor: "grey",
            borderTopWidth: 1.5,
            marginTop: 25,
            marginLeft: 15,
            padding: 10,
          }}
        >
          Seus Feedbacks
        </Text>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View style={styles.fotoperfilP}></View>
          <View style={{ padding: 10, justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Text style={{ fontSize: 14 }}>Lugar</Text>
            <Rating
              name="ratingo"
              defaultValue={5}
              startingValue={7}
              type="custom"
              ratingColor="orange"
              ratingBackgroundColor="darkgrey"
              ratingCount={5}
              imageSize={20}
            />
            <Text style={{ fontSize: 14, width: 200 }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </View>
        </View>
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
    position: "absolute",
  },
  fotoperfilG: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#51C2E8",
    marginLeft: "5%",
    marginTop: 190,
    width: 150,
    height: 150,
  },
  fotoperfilP: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#51C2E8",
    marginLeft: "5%",
    marginTop: 10,
    width: 75,
    height: 75,
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
  config: {
    width: 50,
    height: 50,
  },
});
