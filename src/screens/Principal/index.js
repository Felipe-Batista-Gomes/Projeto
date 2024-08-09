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

import { useNavigation } from "@react-navigation/native";

export default function Principal() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bolinha1}></View>
      <View style={styles.bolinha2}></View>
      <View style={styles.bolinha3}></View>
      <View
        style={{
          marginTop: 20,
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
            source={require("E:/my-app/assets/config.png")}
            style={styles.config}
          />
        </Pressable>
      </View>
      <View style={styles.fotoperfilG}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  config: {
    width: 30,
    height: 30,
    marginBottom: "50%",
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
  },
});
