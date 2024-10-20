import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Platform,
  Image,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppContext from "../../themes/AppContext";
import DarkTheme from "../../themes/darktheme"

let MapView, Marker, RatingComponent, RatingDisplay;

if (Platform.OS !== "web") {
  // Mobile platforms
  MapView = require("react-native-maps").default;
  Marker = require("react-native-maps").Marker;
  const { AirbnbRating, Rating } = require("react-native-ratings");
  RatingComponent = AirbnbRating; // For interactive rating
  RatingDisplay = Rating; // For read-only display
} else {
  // Web platform
  RatingComponent = ({ startingValue, onFinishRating }) => (
    <TextInput
      style={styles.ratingInput}
      placeholder="Enter rating (1-5)"
      keyboardType="numeric"
      value={startingValue !== undefined ? startingValue.toString() : ""}
      onChangeText={(text) => {
        const rating = Number(text);
        if (rating >= 1 && rating <= 5) {
          onFinishRating(rating);
        } else {
          Alert.alert("Invalid Rating", "Please enter a rating between 1 and 5.");
        }
      }}
    />
  );

  RatingDisplay = ({ startingValue, imageSize }) => (
    <View style={styles.ratingDisplayContainer}>
      <Text style={styles.feedbackRatingText}>
        {"★".repeat(Math.round(startingValue))}
        {"☆".repeat(5 - Math.round(startingValue))}
      </Text>
    </View>
  );
}

export default function Local() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  const [place, setPlace] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [userFeedback, setUserFeedback] = useState("");
  const [userRating, setUserRating] = useState(1); // Minimum rating is 1
  const [region, setRegion] = useState(null);
  const [averageRating, setAverageRating] = useState(0);

  const BACKEND_URL =
    "https://backend-ornz.onrender.com";

  const fetchPlaceDetails = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/locals/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch place details");
      }
      const data = await response.json();
      setPlace(data);
      setFeedbacks(data.feedbacks);

      // Calculate average rating
      if (data.feedbacks && data.feedbacks.length > 0) {
        const totalRating = data.feedbacks.reduce(
          (sum, feedback) => sum + feedback.rating,
          0
        );
        const avgRating = totalRating / data.feedbacks.length;
        setAverageRating(avgRating);
      } else {
        setAverageRating(0);
      }

      // Update region when place data is fetched
      if (data.location) {
        setRegion({
          latitude: data.location.lat,
          longitude: data.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      } else {
        // Set default region if location is not available
        setRegion({
          latitude: -22.9068, // Default latitude
          longitude: -43.1729, // Default longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlaceDetails();
  }, [id]);

  const submitFeedback = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      navigation.navigate("Login");
      return;
    }

    if (userRating < 1 || userRating > 5) {
      Alert.alert("Invalid Rating", "Please provide a rating between 1 and 5.");
      return;
    }

    try {
      const response = await fetch(
        `${BACKEND_URL}/api/locals/${id}/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            rating: userRating,
            comment: userFeedback,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      // Clear the input fields
      setUserFeedback("");
      setUserRating(1);

      // Refresh place details to get updated feedbacks
      fetchPlaceDetails();
    } catch (error) {
      console.error(error);
    }
  };

  if (!place || !region) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* Header Image */}
        {place.imageUrl && (
          <Image source={{ uri: place.imageUrl }} style={styles.headerImage} />
        )}

        {/* Map View */}
        {Platform.OS !== "web" ? (
          <View style={styles.mapContainer}>
            <MapView style={styles.map} region={region}>
              {place.location && (
                <Marker
                  coordinate={{
                    latitude: place.location.lat,
                    longitude: place.location.lng,
                  }}
                  title={place.name}
                  description={place.description}
                />
              )}
            </MapView>
          </View>
        ) : (
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapPlaceholderText}>
              Mapa não disponível na web.
            </Text>
          </View>
        )}

        {/* Place Name */}
        <Text style={[styles.placeName, {color: isDarkTheme ? "#FFF" : "#333"}]}>{place.name}</Text>

        {/* Average Rating */}
        <View style={styles.averageRatingContainer}>
          <RatingDisplay
            startingValue={averageRating}
            imageSize={25}
            readonly
            showRating={false}
            ratingBackgroundColor="#ccc"
            ratingColor="#FFD700"
          />
          <Text style={[styles.averageRatingText, {color: isDarkTheme ? "#FFF" : "#777"}]}>
            {averageRating.toFixed(1)} / 5
          </Text>
        </View>

        {/* Place Description */}
        <Text style={[styles.placeDescription, {color: isDarkTheme ? "#FFF" : "#555"}]}>{place.description}</Text>

        {/* Feedback Form */}
        <View style={[styles.feedbackForm, {backgroundColor: isDarkTheme ? DarkTheme.colors.background : "#f9f9f9"}]}>
          <Text style={[styles.feedbackFormTitle, {color: isDarkTheme ? "#ddd" : "#555"}]}>Deixe seu feedback</Text>
          <RatingComponent
            startingValue={userRating}
            onFinishRating={(rating) => setUserRating(rating)}
            imageSize={30}
            minValue={1}
            ratingCount={5}
            showRating={false}
            defaultRating={1}
            ratingBackgroundColor="#ccc"
            ratingColor="#FFD700"
          />
          <TextInput
            style={styles.feedbackInput}
            placeholder="Escreva seu feedback aqui"
            value={userFeedback}
            onChangeText={(text) => setUserFeedback(text)}
            multiline
          />
          <Pressable style={styles.submitButton} onPress={submitFeedback}>
            <Text style={styles.submitButtonText}>Enviar</Text>
          </Pressable>
        </View>

        {/* Existing Feedbacks */}
        <Text style={[styles.sectionTitle, {color: isDarkTheme ? "#ddd" : "#333"}]}>Feedbacks</Text>
        {feedbacks && feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <View key={feedback._id} style={styles.feedbackItem}>
              <View style={styles.feedbackHeader}>
                <Text style={[styles.feedbackUser, {color: isDarkTheme ? "#FFFFFF" : "#333"}]}>
                  {feedback.user?.name || "Usuário"}
                </Text>
                {Platform.OS !== "web" ? (
                  <RatingDisplay
                    startingValue={feedback.rating}
                    imageSize={20}
                    readonly
                    showRating={false}
                    ratingBackgroundColor="#ccc"
                    ratingColor="#FFD700"
                  />
                ) : (
                  <Text style={[styles.feedbackRatingText, {color: isDarkTheme ? "#FFF" : "#333"}]}>
                    Avaliação: {feedback.rating}/5
                  </Text>
                )}
              </View>
              <Text style={[styles.feedbackComment, {color: isDarkTheme ? "#FFFFFF" : "#555"}]}>{feedback.comment}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noFeedbackText}>Sem feedbacks ainda.</Text>
        )}
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
  headerImage: {
    width: "100%",
    height: 200,
  },
  mapContainer: {
    width: "100%",
    height: 250,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mapPlaceholder: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  mapPlaceholderText: {
    color: "#555",
    fontSize: 16,
  },
  placeName: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 20,
    color: "#333",
  },
  averageRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 5,
  },
  averageRatingText: {
    fontSize: 18,
    marginLeft: 10,
  },
  placeDescription: {
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  feedbackForm: {
    marginTop: 20,
    paddingHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  },
  feedbackFormTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  feedbackInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginTop: 10,
    backgroundColor: "#fff",
  },
  ratingInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  submitButton: {
    backgroundColor: "#1CBFD6",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  feedbackItem: {
    padding: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  feedbackHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  feedbackUser: {
    fontSize: 16,
    fontWeight: "bold",
  },
  feedbackRatingText: {
    fontSize: 16,
  },
  ratingDisplayContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  feedbackComment: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  noFeedbackText: {
    fontSize: 16,
    color: "#777",
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
