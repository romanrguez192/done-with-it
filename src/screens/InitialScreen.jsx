import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { Screen, Text, Button } from "../components";

function InitialScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.title}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button>Login</Button>
        <Button color="secondary">Sign Up</Button>
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
