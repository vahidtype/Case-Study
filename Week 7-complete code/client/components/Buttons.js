import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const Buttons = ({ MyPress, color, str }) => {
  return (
    <TouchableOpacity
      style={[styles.Button, { backgroundColor: color }]}
      onPress={MyPress}
    >
      <Text style={styles.text}>{str}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  Button: {
    borderRadius: 5,
    width: 370,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
    borderColor: "gray",
    borderWidth: 0.5,
    borderEndColor: "gray",
  },
  text: {
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
