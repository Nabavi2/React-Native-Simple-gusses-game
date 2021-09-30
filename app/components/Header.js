import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import TextTitle from "./TextTitle";
function Header(props) {
  return (
    <View style={styles.header}>
      <TextTitle style={styles.headerTitle}>{props.title}</TextTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.pink,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
