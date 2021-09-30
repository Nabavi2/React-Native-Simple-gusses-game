import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}> {props.children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.pink,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  number: {
    color: Colors.pink,
    fontSize: 30,
  },
});
export default NumberContainer;
