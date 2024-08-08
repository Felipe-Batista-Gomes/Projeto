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

export default function Configacoes() {
  const navigation = useNavigation();
  return (
    <View style={styles.titulo}>
      <Text style={{ fontSize: 50, color: "white" }}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    flex: 1,
    backgroundColor: "#326e72",
    height: 160,
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
