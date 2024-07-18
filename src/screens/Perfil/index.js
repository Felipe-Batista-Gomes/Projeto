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

import { Rating } from 'react-native-ratings';

import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();
  const ratingo = 3.5;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}></View>

        <View  style={styles.fotoperfilG}></View>

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
        <Text style={{fontSize: 15,width: "100%", borderTopWidth: 2, borderColor: "grey", marginTop: 20, marginLeft: 20}}>Seus Feedbacks</Text>

        {/*Um feedback, com foto de perfil, o lugar avaliado, e as estrelas(a adicionar)*/}
        <View style={{flex: 1, flexDirection: "row"}}>
          <View style={styles.fotoperfilP}></View>
          <View style={{marginTop: 15}}>
            <Text style={{fontSize: 14}}>Lugar</Text>
            <Rating name="half-rating" defaultValue={ratingo} startingValue={7} type="custom" ratingColor="orange" ratingBackgroundColor='darkgrey' ratingCount={10} imageSize={20} onFinishRating={this.ratingCompleted}/>
            <Text>{ratingo}</Text>
            <Text style={{fontSize: 14}}>Seu Feedback</Text>
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
    position: "absolute"
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
