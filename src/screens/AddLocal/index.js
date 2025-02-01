import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  Modal,
  Alert,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  View,
  CameraRoll,
  PermissionsAndroid,
  Button,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";
import * as ImagePicker from "expo-image-picker";
import AppContext from "../../themes/AppContext";

export default function AddLocal() {
  const { t } = useTranslation();
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [offer, setOffer] = useState(null);

  const [file, setFile] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const [heightB, setHeightB] = useState(false)
  const [widthB, setWidthB] = useState(false)

  const [error, setError] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera 
               roll permission to upload images.`
      );
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setFile(result.assets[0].uri);
        console.log(result.assets[0].uri);

        setHeight(result.assets[0].height);
        console.log(result.assets[0].height);

        setWidth(result.assets[0].width);
        console.log(result.assets[0].width);

        if(result.assets[0].height > 2000){
          setHeightB(true);
          console.log(heightB)
        }else {
          setHeightB(false)
          console.log(heightB)
        }

        if(result.assets[0].width > 1620){
          setWidthB(true);
          console.log(widthB)
        }else{
          setWidthB(false)
          console.log(widthB)
        }


        setError(null);
      }
      setModalVisible(false);
    }
  };

  function set() {
    if (file !== null) {
      setFile(null);
    }
    console.log(file);
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaProvider>
          <SafeAreaView style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View
                  style={[
                    styles.modalView,
                    { backgroundColor: isDarkTheme ? "#57575F" : "#eee" },
                  ]}
                >
                  <Pressable onPress={pickImage} style={{padding: 10, alignItems: "center", flexDirection: "column", marginRight: 20, borderRadius: 20, backgroundColor: isDarkTheme ? "white" : "darkgrey"}}>
                  <Icon
                    name="image"
                    size= {60}
                    color={isDarkTheme ? "black" : "white"}
                  />
                  <Text style={{fontSize: 12, fontWeight: 700}}>Escolher imagem</Text>
                  </Pressable>
                  <Pressable onPress={set} style={{padding: 10, alignItems: "center", flexDirection: "column",  borderRadius: 20, backgroundColor: isDarkTheme ? "white" : "darkgrey"}}>
                  <Icon
                    name="trash"
                    size= {60}
                    iconStyle={{width: 65,}}
                    color={isDarkTheme ? "black" : "white"}
                  />
                  <Text style={{fontSize: 12, fontWeight: 700}}>Excluir imagem</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            {file ? (
              <Pressable onPress={() => setModalVisible(true)}>
                <View style={[styles.image, {height: heightB ? 400 : height/4 , width: widthB ? 300 : width/4}]}>
                  <Image source={{ uri: file }} style={styles.imagem} />
                </View>
              </Pressable>
            ) : (
              <Pressable
                style={[styles.image, {height: 300, width: "100%"}]}
                onPress={() => setModalVisible(true)}
              >
                <Image
                  source={require("../../../assets/download.png")}
                  style={{
                    width: 200,
                    height: 200,
                    alignSelf: "center",
                    marginTop: 30,
                  }}
                />
                <Text
                  style={{
                    fontSize: 15,
                    alignSelf: "center",
                    marginTop: 10,
                    fontWeight: 900,
                  }}
                >
                  {t("addPlaceImage")}
                </Text>
              </Pressable>
            )}
          </SafeAreaView>
        </SafeAreaProvider>

        <TextInput
          style={[
            styles.input,
            { borderColor: isDarkTheme ? "#FFF" : "black" },
          ]}
          onChangeText={setName}
          placeholder={t("addPlaceName")}
          placeholderTextColor={isDarkTheme ? "#FFF" : "black"}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: isDarkTheme ? "#FFF" : "black" },
          ]}
          onChangeText={setDescription}
          placeholder={t("addPlaceDescription")}
          placeholderTextColor={isDarkTheme ? "#FFF" : "black"}
        />
        <TextInput
          style={[
            styles.input,
            { borderColor: isDarkTheme ? "#FFF" : "black" },
          ]}
          onChangeText={setOffer}
          placeholder={t("addPlaceOffer")}
          placeholderTextColor={isDarkTheme ? "#FFF" : "black"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
    backgroundColor: "lightgrey",
    marginBottom: 20,
    marginTop: 50,
  },
  imagem: {
    flex: 1,
  },
  input: {
    width: 300,
    height: 50,
    marginTop: 25,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
