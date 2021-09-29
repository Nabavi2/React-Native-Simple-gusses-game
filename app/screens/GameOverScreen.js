import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text> The Game is Over</Text>
      <Text>Number of Rounds : {props.roundsNumber}</Text>
      <Text> Number Was : {props.userNumber} </Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default GameOverScreen;
