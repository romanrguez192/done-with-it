import React from "react";
import { Text } from "react-native";

import { text } from "../config/styles";

function MyText({ children, style }) {
  return <Text style={[text, style]}>{children}</Text>;
}

export default MyText;
