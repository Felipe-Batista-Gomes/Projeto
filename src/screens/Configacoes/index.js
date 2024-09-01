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

import {Container, TextoG, TextoP} from '../Principal/styles';

import CheckBox from "react-native-check-box";

import RNPickerSelect from "react-native-picker-select";

import { useNavigation } from "@react-navigation/native";

export default function Configacoes() {
  const navigation = useNavigation();
  const [acess, setAcess] = useState(true);
  const [acess2, setAcess2] = useState(false);

  const handleChangeAcess = () => {
    setAcess(!acess);
    if (acess2) {
      setAcess2(!acess2);
    }
  };
  const handleChangeAcess2 = () => {
    setAcess2(!acess2);
    if (acess) {
      setAcess(!acess);
    }
  };
  return (
    <Container>
      <View style={styles.titulo}>
        <Text style={{ fontSize: 50, color: "white" }}>Configurações</Text>
      </View>
      <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
        <View style={styles.title}>
          <Text style={{ marginTop: 160, fontSize: 40, color: "grey" }}>
            Acessibilidade
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <CheckBox
            isChecked={acess}
            onClick={handleChangeAcess}
            uncheckedCheckBoxColor="grey"
            checkedCheckBoxColor="#54B8E5"
            leftText="Tema Claro"
            leftTextStyle={{ marginLeft: 30, fontSize: 20 }}
          />
          <CheckBox
            isChecked={acess2}
            onClick={handleChangeAcess2}
            uncheckedCheckBoxColor="grey"
            checkedCheckBoxColor="#54B8E5"
            leftText="Tema Escuro"
            leftTextStyle={{ marginLeft: 30, fontSize: 20 }}
          />
        </View>
      </View>
      <View>
        <View style={styles.title}>
          <Text style={{ fontSize: 40, color: "grey" }}>Idiomas</Text>
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
    </Container>
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
