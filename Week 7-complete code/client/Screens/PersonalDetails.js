import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Buttons from "../components/Buttons";

const PersonalDetails = ({ navigation }) => {
  return (
    <ScrollView>
      <Screen>
        <View style={styles.continer}>
          <Text style={styles.text}>PERSONAL DETAILS</Text>
          <View style={styles.continer1}>
            <AppText>Name(Capital)</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.Abdul"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>Phone.No</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.1234567890"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>Email</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.xyz@gmail.com"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>LinkedIn</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.https://www.linkedin.com/in/abdul-vahid-49a356224/"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>GitHub</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.https://github.com/vahidtype"
              keyboardType="default"
            />
          </View>

          <View style={{ alignItems: "center", paddingTop: "10%" }}>
            <Buttons
              str="Next >>"
              color="#64bfa4"
              MyPress={() => navigation.navigate("EducationDetails")}
            />
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

export default PersonalDetails;
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 10,
  },
  text: {
    //paddingTop: "1%",
    //paddingBottom: 15,
    color: "#64bfa4",
    fontSize: 30,
    fontWeight: "bold",
    //alignSelf: "center",
  },
  continer1: {
    marginVertical: "11%",
  },
  continer2: {
    marginLeft: 10,
    marginRight: 150,
    height: 40,
    width: 90,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },

  continer3: {
    marginBottom: "8%",
    marginTop: 50,
    flexDirection: "row",
  },
});
