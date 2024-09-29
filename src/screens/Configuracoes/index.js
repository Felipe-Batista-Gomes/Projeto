import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useTranslation } from "react-i18next";


export default function Configuracoes() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t("languages")}</Text>
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
            ]}
            style={pickerSelectStyles}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  section: {
    marginBottom: 30,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
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
    alignItems: "center",
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