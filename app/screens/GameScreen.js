import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
} from "react-native";
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
const renderListItem = (value, roundOfGuss) => (
  <View key={value} style={styles.listItem}>
    <Text>#{roundOfGuss}</Text>
    <Text>{value}</Text>
  </View>
);

function GameScreen(props) {
  const initialGuess = generatRoundBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([initialGuess]);
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuess.length);
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
    // setRounds((currentRounds) => currentRounds + 1);
    setPastGuess((curPastGuess) => [nextNumber, ...curPastGuess]);
  };

  return (
    <View style={styles.screen}>
      <TextTitle> Opponent's Gues </TextTitle>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={Colors.white} />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color={Colors.white} />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuess.map((guess, index) =>
            renderListItem(guess, pastGuess.length - index)
          )}
        </ScrollView>
      </View>
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
  listContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.white,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default GameScreen;
