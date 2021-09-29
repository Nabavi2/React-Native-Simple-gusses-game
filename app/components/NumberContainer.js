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
    padding: 8,
    marginVertical: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.pink,
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
  },
});
export default NumberContainer;
