import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TextTitle from "../components/TextTitle";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TextTitle> The Game is Over</TextTitle>
      <TextTitle>Number of Rounds : {props.roundsNumber}</TextTitle>
      <TextTitle> Number Was : {props.userNumber} </TextTitle>
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
