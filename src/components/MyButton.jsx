import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import MyText from "./MyText";
import colors from "../config/colors";

function MyButton({ children, onPress, color = "primary" }) {
  return (
    <TouchableOpacity activeOpacity={0.4} style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <MyText style={styles.text}>{children}</MyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default MyButton;
