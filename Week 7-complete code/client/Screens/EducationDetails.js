import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import Buttons from "../components/Buttons";

const EducationDetails = ({ navigation }) => {
  return (
    <ScrollView>
      <Screen>
        <View style={styles.continer}>
          <Text style={styles.text}>EDUCATION DETAILS</Text>
          
          <View style={styles.continer1}>
            <AppText>SSLC</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.School name"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer3}>
            <View>
              <AppText>Start Year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="start year"
                keyboardType="default"
              />
            </View>
            <View>
              <AppText>End year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="End year"
                keyboardType="default"
              />
            </View>
          </View>

          <View style={styles.continer1}>
            <AppText>SSLC Percentage</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.100"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>HSC</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.School name"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer3}>
            <View>
              <AppText>Start Year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="start year"
                keyboardType="default"
              />
            </View>
            <View>
              <AppText>End year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="End year"
                keyboardType="default"
              />
            </View>
          </View>

          <View style={styles.continer1}>
            <AppText>HSC Percentage</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.100"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>Bachelor Degree</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.College name"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer3}>
            <View>
              <AppText>Start Year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="start year"
                keyboardType="default"
              />
            </View>
            <View>
              <AppText>End year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="End year"
                keyboardType="default"
              />
            </View>
          </View>

          <View style={styles.continer1}>
            <AppText>Bachelor Degree Percentage</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.100"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.continer1}>
            <AppText>Master Degree</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.College name"
              keyboardType="default"
            />
          </View>

          <View style={styles.continer3}>
            <View>
              <AppText>Start Year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="start year"
                keyboardType="default"
              />
            </View>
            <View>
              <AppText>End year</AppText>
              <AppTextInput
                style={styles.continer2}
                placeholderTextColor={"#64bfa4"}
                placeholder="End year"
                keyboardType="default"
              />
            </View>
          </View>

          <View style={styles.continer1}>
            <AppText>Master Degree Percentage</AppText>
            <AppTextInput
              placeholderTextColor={"#64bfa4"}
              placeholder="Ex.100"
              keyboardType="numeric"
            />
          </View>

          <View style={{ alignItems: "center", paddingTop: "10%" }}>
            <Buttons
              str="Next >>"
              color="#64bfa4"
              MyPress={() => navigation.navigate("Attendance")}
            />
          </View>
        </View>
      </Screen>
    </ScrollView>
  );
};

export default EducationDetails;
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