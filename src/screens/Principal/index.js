import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";

export default function Principal() {
  const navigation = useNavigation();
  const [places, setPlaces] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("Login");
      } else {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          "https://backend-ornz.onrender.com/api/locals/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }
        const data = await response.json();

        setPlaces(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlaces();
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.title}>Principais pontos turísticos</Text>
        <View style={styles.touristContainer}>
          {places.map((place) => (
            <Pressable
              key={place._id}
              style={styles.touristItem}
              onPress={() => {
                navigation.navigate("Local", { id: place._id });
              }}
            >
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={50}
                  color="#1CBFD6"
                />
              </View>
              <View style={styles.touristTextContainer}>
                <Text style={styles.ponto}>{place.name}</Text>
                <Rating
                  readonly
                  startingValue={place.averageRating || 1}
                  imageSize={20}
                  ratingBackgroundColor="#ccc"
                  ratingColor="#FFD700"
                  style={styles.rating}
                />
                <Text style={styles.desc}>{place.description}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  touristContainer: {
    paddingHorizontal: 20,
  },
  touristItem: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 1,
    padding: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  touristTextContainer: {
    flex: 1,
  },
  ponto: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    alignSelf: "flex-start",
    marginVertical: 5,
  },
  desc: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
});
