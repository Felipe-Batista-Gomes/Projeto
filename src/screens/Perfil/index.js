import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from "react-native-ratings";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("Login");
        return;
      }

      try {
        const response = await fetch(
          "https://backend-ornz.onrender.com/api/users/getuser",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture}>
            <Text style={styles.initials}>
              {userData.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </Text>
          </View>
          <Text style={styles.userName}>{userData.name}</Text>
        </View>

        <Text style={styles.description}>
          Sua descrição vai aqui. Você pode atualizar essa seção com informações
          sobre você.
        </Text>

        <Text style={styles.sectionTitle}>Seus Feedbacks</Text>
        <View style={styles.feedbackContainer}>
          <View style={styles.feedbackItem}>
            <View style={styles.feedbackImage}></View>
            <View style={styles.feedbackTextContainer}>
              <Text style={styles.feedbackPlace}>Lugar</Text>
              <Rating
                type="custom"
                ratingColor="orange"
                ratingBackgroundColor="darkgrey"
                ratingCount={5}
                imageSize={20}
                readonly
                startingValue={4}
              />
              <Text style={styles.feedbackText}>
                Sua avaliação sobre o lugar vai aqui. Você pode escrever um
                comentário sobre sua experiência.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  hamburgerMenu: {
    padding: 10,
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  settingsIcon: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profilePicture: {
    backgroundColor: "#51C2E8",
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  initials: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
  },
  userName: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    marginHorizontal: 30,
    fontSize: 16,
    textAlign: "center",
    color: "#393D40",
  },
  sectionTitle: {
    fontSize: 24,
    borderColor: "grey",
    borderTopWidth: 1.5,
    marginTop: 25,
    marginLeft: 15,
    padding: 10,
  },
  feedbackContainer: {
    paddingHorizontal: 20,
  },
  feedbackItem: {
    flexDirection: "row",
    marginTop: 20,
  },
  feedbackImage: {
    backgroundColor: "#51C2E8",
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  feedbackTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  feedbackPlace: {
    fontSize: 14,
    fontWeight: "bold",
  },
  feedbackText: {
    fontSize: 14,
    marginTop: 5,
  },
});
