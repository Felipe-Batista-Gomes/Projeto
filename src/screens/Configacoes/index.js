import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

import Checkbox from "react-native-check-box";

import RNPickerSelect from "react-native-picker-select";

import { useNavigation } from "@react-navigation/native";

export default function Configuracoes() {
  const navigation = useNavigation();
  const [lightMode, setLightMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const handleLightMode = () => {
    if(!lightMode){
      setLightMode(!lightMode);
    }
    if (darkMode) {
      setDarkMode(!darkMode);
    }
    console.log(darkMode, lightMode);
  };
  const handleDarkMode = () => {
    if(!darkMode){
      setDarkMode(!darkMode);
    }
    if (lightMode) {
      setLightMode(!lightMode);
    }
    console.log(darkMode, lightMode);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.titulo}>
        <Text style={{ fontSize: 50, color: "white" }}>Configurações</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
        <View style={styles.title}>
          <Text style={{ marginTop: 160, fontSize: 40, color: "grey"}}>
            Acessibilidade
          </Text>
        </View>
        <View style={{width: "50%", marginTop: 15, marginBottom: 15}}>
          <Checkbox
            isChecked={lightMode}
            onClick={handleLightMode}
            uncheckedCheckBoxColor="grey"
            checkedCheckBoxColor="#54B8E5"
            leftText="Tema Claro"
            leftTextStyle={{ marginLeft: 30, fontSize: 20 }}
          />
          <Checkbox
            isChecked={darkMode}
            onClick = {handleDarkMode}
            uncheckedCheckBoxColor="grey"
            checkedCheckBoxColor="#54B8E5"
            leftText="Tema Escuro"
            leftTextStyle={{ marginLeft: 30, fontSize: 20 }}
          />
        </View>
      </View>
      <View>
        <View style={styles.title}>
          <Text style={{fontSize: 40, color: "grey"}}>Idiomas</Text>
        </View>
        <View
          style={{
            width: "40%",
            marginLeft: 50,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <RNPickerSelect
            placeholder={{
              label: "Selecione um idioma...",
              color: "darkblue",
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "English", value: "en" },
              { label: "Español", value: "es" },
              { label: "Français", value: "fr" },
              { label: "Português(Brasil)", value: "pt-br" },
              { label: "Português(Portugal)", value: "pt-pt" },
            ]}
            style={styles.picker}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    flex: 1,
    backgroundColor: "#326e72",
    height: 160,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "70%",
    marginLeft: 10,
  },
  picker: {
    borderWidth: 0.5,
    borderColor: "grey",
    width: "100%",
    height: "30%",
  },
});
