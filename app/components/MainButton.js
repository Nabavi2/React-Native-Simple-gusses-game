import React from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

function MainButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.pink,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
export default MainButton;
