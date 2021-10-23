import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import { colors } from "../config/styles";

function Button({ children, onPress, color = "primary" }) {
  return (
    <TouchableOpacity activeOpacity={0.4} style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
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

export default Button;
