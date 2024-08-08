import React, { useState } from "react";

import { StyleSheet } from "react-native";

export default function Principal() {
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
        source={require("E:/my-app/assets/config.png")}
        style={styles.config}
      />
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({
  config: {
    width: 50,
    height: 50,
  },
});
