import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Buttons from "../components/Buttons";
import { Formik } from "formik";
import Yup from "../App/Yup";
const LoginScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ Email: "", Password: "" }}
      onSubmit={(values) => auth(values)}
      validationSchema={Yup}
    >
      {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <Screen>
          <View style={styles.continer}>
            <Text style={styles.text}>STUDENTS DETAILS</Text>
            <AppText>Username/Email ID</AppText>
            <AppTextInput
              placeholder="Enter Your Email"
              keyboardType="email-address"
              onChangeText={handleChange("Email")}
              onBlur={() => setFieldTouched("Email")}
            />
            <View style={styles.continer1}>
              <AppText>Password</AppText>
              <AppTextInput
                placeholder="Enter Your Password"
                secureTextEntry={true}
                keyboardType="default"
                onChangeText={handleChange("Password")}
                onBlur={() => setFieldTouched("Password")}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Buttons
                str="SIGN IN"
                color="skyblue"
                MyPress={() => navigation.navigate("PersonalDetails")}
              />
              <AppText>New to Students Details ? Create New Account</AppText>
            </View>
          </View>
        </Screen>
      )}
    </Formik>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 10,
  },
  text: {
    paddingTop: "50%",
    paddingBottom: 15,
    color: "skyblue",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  continer1: {
    marginVertical: "15%",
    paddingBottom: 120,
  },
});
