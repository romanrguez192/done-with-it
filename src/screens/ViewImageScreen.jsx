import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { colors } from "../config/styles";

function ViewImageScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.iconsContainer}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    flex: 1,
  },
  screen: {
    backgroundColor: colors.black,
  },
});

export default ViewImageScreen;
