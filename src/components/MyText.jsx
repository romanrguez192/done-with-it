import React from "react";
import { Text } from "react-native";

import { text } from "../config/styles";

function MyText({ children, style, ...props }) {
  return (
    <Text style={[text, style]} {...props}>
      {children}
    </Text>
  );
}

export default MyText;
