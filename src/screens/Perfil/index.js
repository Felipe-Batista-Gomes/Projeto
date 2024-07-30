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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.fotoperfilG}></View>
        </View>

        <Text style={{ marginTop: 400, marginLeft: 40, fontSize: 30 }}>
          Seu nome
        </Text>

        <Text
          style={{
            marginTop: 100,
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
            fontSize: 24,
            borderColor: "grey",
            borderTopWidth: 1.5,
            marginTop: 50,
            padding: 10,
          }}
        >
          Seus Feedbacks
        </Text>
        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View style={styles.fotoperfilP}></View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 14 }}>Lugar</Text>
            <Rating
              name="ratingo"
              defaultValue={5}
              startingValue={7}
              type="custom"
              ratingColor="orange"
              ratingBackgroundColor="darkgrey"
              ratingCount={10}
              imageSize={20}
            />
            <Text style={{ fontSize: 14, width: 200 }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
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
    marginTop: 220,
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
});
