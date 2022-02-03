import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Logo from "../components/logo";
import AppText from "../components/AppText";
const Profile = () => {
  return (
    <Screen>
      <View style={{ flex: 1 }}>
        <View style={styles.continer}>
          <Logo source={require("../assets/av.jpg")}></Logo>
          <AppText>ABDUL VAHID M</AppText>
          <AppText>MCA</AppText>
          <AppText>abdulathreya@gmail.com</AppText>
        </View>
        <View style={styles.continer1}>
          <View style={{ padding: 20 }}>
            <AppText style={{ color: "#2C78E4" }}>Experience</AppText>
            <AppText style={{ marginVertical: 5 }}>
              FullStack Developer (Fresher)
            </AppText>
            <AppText style={{ marginVertical: 5 }}>
              Working at DIMA
            </AppText>
            <AppText style={{ marginVertical: 5 }}>
              Joining the Company at Jan-03 
            </AppText>
          </View>
        </View>
        <View style={styles.continer2}>
          <View style={{ padding: 20 }}>
            <AppText style={{ color: "#2C78E4", marginBottom: 5 }}>
              Education
            </AppText>
            <AppText style={{ marginTop: 5 }}>RVS College of Arts and Science</AppText>
            <AppText style={{ marginVertical: 5 }}>MCA</AppText>
            <AppText style={{ marginVertical: 5 }}>2020 - 2022</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Profile;
const styles = StyleSheet.create({
  continer: {
    alignItems: "center",
  },
  continer1: {
    height: 157,
    width: 363,
    borderRadius: 15,
    margin: 10,
    backgroundColor: "#F7F7FA",
    marginTop: "65%",
  },
  continer2: {
    paddingTop: 5,
    paddingLeft: 5,
    height: 170,
    width: 363,
    margin: 10,
    backgroundColor: "#F7F7FA",
  },
});
