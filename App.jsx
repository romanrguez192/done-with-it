import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { navigationTheme, AuthNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
