import React from "react";
import { TextInput, StyleSheet } from "react-native";

function Input(props) {
  return (
    <TextInput {...props} style={{ ...styles.container, ...props.style }} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
