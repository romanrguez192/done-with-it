import React from "react";
import { StyleSheet, View, Image } from "react-native";

import MyText from "../components/MyText";
import MyButton from "../components/MyButton";
import colors from "../config/colors";

function InitialScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <MyText style={styles.title}>Sell What You Don't Need</MyText>
      </View>
      <View style={styles.buttonsContainer}>
        <MyButton>Login</MyButton>
        <MyButton color="secondary">Sign Up</MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.light,
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
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default InitialScreen;
