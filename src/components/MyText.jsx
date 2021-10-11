import React from "react";
import { Text, StyleSheet } from "react-native";

import { text } from "../config/styles";

function MyText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text,
});

export default MyText;
