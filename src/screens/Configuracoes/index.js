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
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: isDarkTheme ? DarkTheme.colors.background : LightTheme.colors.background}}>
      <View style={{marginBottom: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#DDDDDD",}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color: isDarkTheme ? DarkTheme.colors.textprincconf : LightTheme.colors.textprincconf, textAlign: "center", marginBottom: 20,}}>{t("languages")}</Text>
        <RNPickerSelect
             style={{
                ...pickerSelectStyles,
                 inputAndroid: {color: 
isDarkTheme ? "white" : "black",borderWidth:1,borderColor:isDarkTheme? "white" : "black", borderRadius:10, },
                inputIOS:{} ,  //for ios style code go here
                iconContainer: {
                  right: "2%",
                },
              }}
              pickerProps={{mode: "dropdown"}}
            //   placeholder={}
            placeholder={{
                label: t("selectLanguage"),
                value: null,
                color: "darkblue",
            }}
    onValueChange={(value) => changeLanguage(value)}
    items={[
      { label: "Português (Brasil)", value: "pt-br", color: "black"},
      { label: "English", value: "en", color: "black" },
      { label: "Español", value: "es", color: "black" },
      { label: "Français", value: "fr", color: "black" },
    ]}
    useNativeAndroidPickerStyle={false}
    Icon={() => {
        return (
          <View
            style={{
              backgroundColor: 'transparent',
              borderTopWidth: 8,
              borderTopColor: isDarkTheme ? "lightgrey" : "black",
              borderRightWidth: 10,
              alignItems:'center',
              justifyContent:'center',
              borderRightColor: 'transparent',
              borderLeftWidth: 10,
              borderLeftColor: 'transparent',
              width: 10,
              marginTop:'100%',
              height: 0,
            }}
          />
        );
      }}
/>        
      </View>
      <View style={{marginBottom: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#DDDDDD",}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color: isDarkTheme ? DarkTheme.colors.textprincconf : LightTheme.colors.textprincconf, textAlign: "center", marginBottom: 20,}}>{t("changeProfile")}</Text>
        <TextInput style={{borderColor: isDarkTheme ? "#FFF" : "black", color: isDarkTheme ? "#FFF" : "black", marginTop: 10, borderWidth: 1, borderColor: isDarkTheme ? "lightgrey" : "darkgrey" , padding: 5}} placeholderTextColor={isDarkTheme ? "lightgrey" : "darkgrey"} placeholder={t("changeNamePlaceholder")}></TextInput>
        <TextInput style={{marginTop: 10, borderWidth: 1, borderColor: isDarkTheme ? "lightgrey" : "darkgrey", padding: 5}} placeholderTextColor={isDarkTheme ? "lightgrey" : "darkgrey"} placeholder={t("changeDescriptionPlaceholder")}></TextInput>
        <Pressable style={styles.salvar}>
          <Text style={styles.stexto}>{t("saveChanges")}</Text>
        </Pressable>
      </View>
      <View style={{marginBottom: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#DDDDDD",}}>
        <Text style={{fontSize: 32, fontWeight: "bold", color: isDarkTheme ? DarkTheme.colors.textprincconf : LightTheme.colors.textprincconf, textAlign: "center", marginBottom: 20,}}>{t("accessibility")}</Text>
        <View style={styles.themeContainer}>
          <Text style={{color: isDarkTheme ? "white" : "#333333"}}><Text style={{fontWeight: "bold"}}>{t("themes")}:    </Text> {t("light")}</Text>
          <Switch value={isDarkTheme} trackColor={{false: "darkgrey", true: "white"}} thumbColor={isDarkTheme ? "white" : "darkgrey"} onChange={() => {
            setIsDarkTheme(prev => !prev)
          }}/>
          <Text style={{color: isDarkTheme ? "white" : "#333333"}}> {t("dark")}</Text>
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
    flexDirection: "row",
    width: "100%",
    borderWidth: 5,
    borderColor: "red",
    borderRadius: 20
  },
  themeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "#cccccc",
    borderRadius: 4,
    color: "#ccc",
    paddingRight: 30,
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
    color: "#ccc",
    paddingRight: 30,
    width: 250,
    textAlign: "center",
  },
})