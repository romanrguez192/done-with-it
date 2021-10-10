import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Screen from "../components/Screen";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";

function InitialScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <MyText style={styles.title}>Sell What You Don't Need</MyText>
      </View>
      <View style={styles.buttonsContainer}>
        <MyButton>Login</MyButton>
        <MyButton color="secondary">Sign Up</MyButton>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 15,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default InitialScreen;
