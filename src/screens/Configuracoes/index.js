import React, { useContext } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Switch} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AppContext from "../../themes/AppContext";
import DarkTheme from "../../themes/darktheme";
import LightTheme from "../../themes/lighttheme";

export default function Configuracoes() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: isDarkTheme ? DarkTheme.colors.background : LightTheme.colors.background}}>
      <View style={{marginBottom: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#DDDDDD",}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color: isDarkTheme ? DarkTheme.colors.textprincconf : LightTheme.colors.textprincconf, textAlign: "center", marginBottom: 20,}}>{t("languages")}</Text>
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            placeholder={{
              label: t("selectLanguage"),
              color: "darkblue",
            }}
            onValueChange={(value) => changeLanguage(value)}
            items={[
              { label: "Português (Brasil)", value: "pt-br" },
              { label: "English", value: "en" },
              { label: "Español", value: "es" },
              { label: "Français", value: "fr" },
            ]}
            style={pickerSelectStyles}
          />
        </View>
      </View>
      <View style={{marginBottom: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#DDDDDD",}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color: isDarkTheme ? DarkTheme.colors.textprincconf : LightTheme.colors.textprincconf, textAlign: "center", marginBottom: 20,}}>{t("changeProfile")}</Text>
        <TextInput style={{marginTop: 10, borderWidth: 1, borderColor: isDarkTheme ? "lightgrey" : "darkgrey" , padding: 5}} placeholderTextColor={isDarkTheme ? "lightgrey" : "darkgrey"} placeholder={t("changeNamePlaceholder")}></TextInput>
        <TextInput style={{marginTop: 10, borderWidth: 1, borderColor: isDarkTheme ? "lightgrey" : "darkgrey", padding: 5}} placeholderTextColor={isDarkTheme ? "lightgrey" : "darkgrey"} placeholder={t("changeDescriptionPlaceholder")}></TextInput>
        <Pressable style={styles.salvar}>
          <Text style={styles.stexto}>{t("saveChanges")}</Text>
        </Pressable>
      </View>
      <View style={{marginBottom: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#DDDDDD",}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color: isDarkTheme ? DarkTheme.colors.textprincconf : LightTheme.colors.textprincconf, textAlign: "center", marginBottom: 20,}}>{t("accessibility")}</Text>
        <View style={styles.pickerContainer}>
          <Text style={{color: isDarkTheme ? "white" : "#333333"}}><Text style={{fontWeight: "bold"}}>Temas:    </Text> Claro</Text>
          <Switch value={isDarkTheme}  onChange={() => {
            setIsDarkTheme(prev => !prev)
          }}/>
          <Text style={{color: isDarkTheme ? "white" : "#333333"}}> Escuro</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stexto: {
    color: "white",
    fontWeight: "bold",
  },
  salvar: {
    backgroundColor: "red",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#333333",
  },
  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 4,
    color: "#333333",
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    width: 250,
    textAlign: "center",
  },
  inputAndroid: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 4,
    color: "#333333",
    paddingRight: 30,
    backgroundColor: "#FFFFFF",
    width: 250,
    textAlign: "center",
  },
})