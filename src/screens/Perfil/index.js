import React, { useState, useMemo, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Rating } from "react-native-ratings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import LightTheme from "../../themes/lighttheme";
import DarkTheme from "../../themes/darktheme";
import AppContext from "../../themes/AppContext";

export default function Perfil() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const { t } = useTranslation();

  const [places, setPlaces] = useState([]);
  const [ids, setIds] = useState([]);

  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);

  const BACKEND_URL =
    "https://backend-ornz.onrender.com";

  
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          navigation.navigate("Login");
          return 1;  // Error code for missing token
        }
  
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
        console.log(data);
        return 0;  // Success code
      } catch (error) {
        console.error(error);
        return 2;  // Error code for fetch failure
      }
    };

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
            console.log(data[2]);
          } catch (error) {
            console.error(error);
          }
        };
        fetchPlaces();
      }, []);

  const fetchFeedbacks = async () => {
    try {
      places.map(place => {setIds(place._id)})
      ids.forEach(id => {
        const respons = fetch(`${BACKEND_URL}/api/locals/${id}`);  
      });
      
      if (!respons.ok) {
        throw new Error("Failed to fetch places ");
      }
      const dateau = await respons.json();
      if(dateau.user._id == userData._id){
        setFeedbacks(dateau.feedbacks);
      }
      console.log(dateau.user._id)
      console.log(feedbacks)
    } catch (error) {
      return;
    }
  };
  
  useEffect(() => {
    fetchFeedbacks();
  })

  // Fetch user data when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchUserData();
    }, [])
  );

  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{color: isDarkTheme? "white" : "black"}}>{t("profileLoading")}</Text>
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
          <Text style={[styles.userName, {color: isDarkTheme ?  "white" : "black"}]}>{userData.name}</Text>
        </View>

        <Text style={[styles.description, {color: isDarkTheme ?  "#DEDEDE" : "#393D40"}]}>
          {t("profileDescriptionPlaceholder")}
        </Text>

        <Text style={[styles.sectionTitle, {borderColor: isDarkTheme ? "lightgrey" : "grey", color: isDarkTheme ? "#DEDEDE" : "black"}]}>{t("profileFeedbackTitle")}</Text>
        <View style={styles.feedbackContainer}>
        {feedbacks.map(feedback => <Text key={feedback._id}>{feedback.comment}</Text>)}
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
  },
  sectionTitle: {
    fontSize: 24,
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
})