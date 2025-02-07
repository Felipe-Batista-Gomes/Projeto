import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  Dimensions,
  Button
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";
import Carousel from "react-native-reanimated-carousel";
import { useTranslation } from "react-i18next";
import AppContext from "../../themes/AppContext";

const { width: screenWidth } = Dimensions.get("window");

export default function Principal() {
  const navigation = useNavigation();
  const [places, setPlaces] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();

  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  const carouselImages = [
    { id: 1, image: require('../../../assets/mirante.jpg') },
    { id: 2, image: require('../../../assets/Nordestino2.jpg') },
    { id: 3, image: require('../../../assets/Trapia.jpeg') },
    { id: 4, image: require('../../../assets/VerdeRosa2.jpg') },
    { id: 5, image: require('../../../assets/complexo.jpeg') },
  ];

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
          throw new Error(t("fetchError"));
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

  const renderCarouselItem = ({ item }) => {
    return <Image source={item.image} style={styles.carouselImage} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Carousel
            data={carouselImages}
            renderItem={renderCarouselItem}
            width={screenWidth}
            height={200}
            loop={true}
          />
        </View>

        <Text style={[styles.title, {color: isDarkTheme ? "#FFFFFF" : "#333333"}]}>{t("mainTouristTitle")}</Text>
        <View style={styles.touristContainer}>
          {places.map((place) => (
            <Pressable
              key={place._id}
              style={[styles.touristItem, {backgroundColor: isDarkTheme ? "#555" : "#eee"}]}
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
                <Text style={[styles.ponto, {color: isDarkTheme ? "white" : "black"}]}>{place.name}</Text>
                <Rating
                  readonly
                  startingValue={place.averageRating || 1}
                  imageSize={20}
                  ratingBackgroundColor="#ccc"
                  ratingColor="#FFD700"
                  tintColor={isDarkTheme ? "#555" : "#eee"}
                  style={styles.rating}
                />
                <Text style={[styles.desc, {color: isDarkTheme ? "#eee" : "#555"}]}>{place.description}</Text>
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
  carouselTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    borderColor: 'black',
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
  },
  carouselImage: {
    width: screenWidth,
    height: 200,
    borderRadius: 8,
    borderRadius: 8,
    borderColor: 'black',
  },
});