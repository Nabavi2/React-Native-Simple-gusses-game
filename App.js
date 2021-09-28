import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./app/components/Header";
import StartGameScreen from "./app/screens/StartGameScreen";

function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
