import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import TextTitle from "../components/TextTitle";
import Colors from "../constants/Colors";
import TextBody from "../components/TextBody";
import MainButton from "../components/MainButton";

function GameOverScreen(props) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TextTitle> The Game is Over</TextTitle>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/success.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <TextBody style={styles.resultText}>
            Your phone needed
            <Text style={styles.heilight}> {props.roundsNumber}</Text> rounds to
            guess number{" "}
            <Text style={styles.heilight}> {props.userNumber}</Text>
          </TextBody>
        </View>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
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
