import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import AppText from "./AppText";
const AppTextInput = ({ placeholder, ...otherProps }) => {
  return (
    <SafeAreaView>
      <View style={styles.continer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          {...otherProps}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  continer: {
    flex: 1,
  },
});

export default AppTextInput;
