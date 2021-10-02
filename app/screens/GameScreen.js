import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import TextTitle from "./../components/TextTitle";
import MainButton from "../components/MainButton";
const generatRoundBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generatRoundBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

function GameScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    generatRoundBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't Lie", "Do you know this is wrong !", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generatRoundBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currentRounds) => currentRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <TextTitle> Opponent's Gues </TextTitle>
      <NumberContainer> {currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={Colors.white} />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color={Colors.white} />
        </MainButton>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
});

export default GameScreen;
