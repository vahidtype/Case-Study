import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Buttons from "../components/Buttons";
import { Formik } from "formik";
import Yup from "../App/Yup";
const SignUpScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.continer}>
        <Text style={styles.text}>STUDENTS DETAILS</Text>
        <View style={styles.container}>
          <View style={styles.continer1}>
            <AppText>UserName</AppText>
            <AppTextInput
              placeholder="Enter Your UserName"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.continer1}>
            <AppText>Email ID</AppText>
            <AppTextInput
              placeholder="Enter Your Email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.continer1}>
            <AppText>Password</AppText>
            <AppTextInput
              placeholder="Enter Your Password"
              secureTextEntry={true}
              keyboardType="default"
            />
          </View>
          <View style={styles.continer1}>
            <AppText>Confirm Password</AppText>
            <AppTextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              keyboardType="default"
            />
          </View>
          <View style={{ alignItems: "center", paddingTop: "30%" }}>
            <Buttons
              style={styles.Button}
              str="SIGN UP"
              color="#F08080"
              MyPress={() => navigation.navigate("Sign In")}
            />
            <AppText style={{ fontSize: 10 }}>
              By continuing, I agree to Students Details Terms of service and Privacy
              policy
            </AppText>
            <AppText style={{ fontSize: 10 }}>
              Already have an Account ? Sign In here
            </AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 10,
  },
  text: {
    color: "#F08080",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  continer1: {
    marginVertical: "12%",
  },
});
