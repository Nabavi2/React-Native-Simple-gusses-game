import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

function Card(props) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 12,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
