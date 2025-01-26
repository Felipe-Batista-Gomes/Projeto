
import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView, View, CameraRoll, PermissionsAndroid } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

export default function AddLocal() {
  const [imageUri, setImageUri] = useState(null);
  takePicture = async () => {
    try {
      if (this.camera) {
        const options = {
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true
        };
        const { uri } = await this.camera.takePictureAsync(options);
        setImageUri(uri);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  submitPicture = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          "title": "Access Storage",
          "message": "Access Storage for the pictures"
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await CameraRoll.saveToCameraRoll(imageUri);
      } else {
        console.log("Permissao de camera negada.");
      }
    } catch (err) {
      console.warn(err);
    }

    setImageUri(null);
  }
  const cameraRef = useRef(null);
  return (
    imageUri ?
      <ImageBackground style={styles.preview} source={{ uri: imageUri }}>
        <ScrollView></ScrollView>
        <View style={styles.buttonsPreview}>
          <Icon name="times" size={25} color="#fff" onPress={() => setImageUri(null)} />
          <Icon name="check" size={25} color="#fff" onPress={() => submitPicture()} />
        </View>
      </ImageBackground>
      :
      <RNCamera
        ref={cameraRef}
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={"We need your permission to use your camera phone"}
      >
        <TouchableOpacity onPress={takePicture} style={styles.button}>
          <Text>PICTURE</Text>
        </TouchableOpacity>
      </RNCamera>
  )
}
const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  button: {
    alignSelf: "center",
    backgroundColor: "blue",
    color: "#fff"
  },
  preview: {
    width: "100%",
    height: "100%",
    flex: 1
  },
  buttonsPreview: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5
  }
});