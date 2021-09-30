import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TextTitle from "../components/TextTitle";
import Colors from "../constants/Colors";
import TextBody from "../components/TextBody";
import MainButton from "../components/MainButton";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TextTitle> The Game is Over</TextTitle>

      <Image
        style={styles.image}
        source={require("../../assets/success.png")}
      />

      <View style={styles.resultContainer}>
        <TextBody style={styles.resultText}>
          Your phone needed
          <Text style={styles.heilight}> {props.roundsNumber}</Text> rounds to
          guess number <Text style={styles.heilight}> {props.userNumber}</Text>
        </TextBody>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 270,
    width: 270,
    borderRadius: 135,
    borderWidth: 3,
    overflow: "hidden",
    borderColor: Colors.black,
    marginVertical: 20,
  },
  heilight: {
    color: Colors.pink,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
export default GameOverScreen;
