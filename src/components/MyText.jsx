import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function MyText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default MyText;
