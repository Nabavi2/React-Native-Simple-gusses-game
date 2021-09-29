import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Colors from "../constants/Colors";
import Card from "./../components/Card";
import NumberContainer from "../components/NumberContainer";
import Input from "./../components/Input";

function StartGameScreen(props) {
  const [enteredValue, setEneterdValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNubmer] = useState();
  const numInputHandler = (inputText) => {
    setEneterdValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setEneterdValue("");
    setSelectedNubmer();
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (choosenNumber <= 0 || isNaN(choosenNumber) || choosenNumber >= 99) {
      Alert.alert("Invalid Number!", "your nubmer muset be between 1 and 99", [
        { text: "Okey", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNubmer(choosenNumber);
    setEneterdValue("");
    Keyboard.dismiss();
  };
  let confirmOutput;
  if (confirmed) {
    confirmOutput = (
      <Card style={styles.card}>
        <Text style={styles.text}> You Selected </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={{ fontSize: 16 }}>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapatilize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.purple}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.pink}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    textAlign: "center",
    width: 50,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
  },
  card: {
    marginVertical: 20,
    elevation: 8,
    width: "60%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default StartGameScreen;
