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

export default function Local() {
  const navigation = useNavigation();
  const ratingo = 3.5;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal={false}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.container31}>
              <View style={styles.container41}></View>
            </View>
            <View style={styles.container32}>
              <View style={styles.container42}></View>
            </View>
          </View>
        </View>

        <Text style={{ marginTop: 340, marginLeft: 40, fontSize: 30 }}>
          Nome do lugar
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
          Descrição do local
        </Text>

        <View style={{ marginTop: 30, flexDirection: "row", borderColor: "lightgrey", borderTopWidth: 1.5, }}>
          <View style={styles.fotoperfilU}></View>
          <View style={{ padding: 10, width: "100%", justifyContent: "flex-start", alignItems: "flex-start"  }}>
            <Text
              style={{
                marginLeft: 10,
                marginRight: 30,
                fontSize: 15,
                width: "70%",
                height: 80,
                borderWidth: 3,
                borderColor: "black",
                padding: 10,
              }}
            >
            Deixe seu feedback
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <View style={styles.fotoperfilP}></View>
          <View style={{ padding: 10, justifyContent: "flex-start", alignItems: "flex-start"  }}>
            <Text style={{ fontSize: 20 }}>Nome do Usuário</Text>
            <Rating
              name="ratingo"
              backgroundColor="red"
              defaultValue={5}
              startingValue={7}
              type="custom"
              ratingColor="orange"
              ratingBackgroundColor="darkgrey"
              ratingCount={5}
              imageSize={20}
            />
            <Text style={{ fontSize: 15, width: 200 }}>
                Feedback
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
    backgroundColor: "#326E72",
    height: 300,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  container2: {
    backgroundColor: "#1CBFD6",
    marginTop: 100,
    height: 200,
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container31: {
    backgroundColor: "#326E72",
    height: "80%",
    width: "30%",
    marginTop: 40,
    marginRight: "5",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  container32: {
    backgroundColor: "#326E72",
    height: "80%",
    width: "30%",
    marginTop: 40,
    marginLeft: 5
  },
  container41: {
    backgroundColor: "#1CBFD6",
    height: 10,
    width: 10,
    marginBottom: 80,
    borderRadius: 100,
  },
  container42: {
    backgroundColor: "#1CBFD6",
    height: 10,
    width: 10,
    marginTop: 70,
    borderRadius: 100
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
  fotoperfilU: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "#51C2E8",
    marginLeft: "2%",
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
