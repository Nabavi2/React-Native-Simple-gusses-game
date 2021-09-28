import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
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
  },
});

export default Header;
