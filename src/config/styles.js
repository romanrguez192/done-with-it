import { Platform } from "react-native";

const colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  medium: "#6e6969",
  light: "#f8f8ff",
  dark: "#333",
  danger: "#ff5252",
  alert: "#ffe66d",
};

const text = {
  color: colors.dark,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
};

export { colors, text };
