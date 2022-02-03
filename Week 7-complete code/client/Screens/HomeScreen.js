import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Buttons from "../components/Buttons";
import LoginScreen from "./LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const HomeScreen = ({ navigation }) => {
  return (
    <Screen>
      <Text style={styles.text}>STUDENTS DETAILS</Text>
      <Buttons
        str="SIGN IN"
        color="pink"
        MyPress={() => navigation.navigate("Sign In")}
      />
      <Buttons
        str="SIGN UP"
        color="pink"
        MyPress={() => navigation.navigate("Sign Up")}
      />
    </Screen>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  text: {
    paddingTop: "50%",
    paddingBottom: 15,
    color: "pink",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
