import { DefaultTheme } from "@react-navigation/native";

import { colors } from "../config/styles";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.light,
  },
};

export default navigationTheme;
