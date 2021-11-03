import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";
import { OfflineBar } from "./src/components";
import { colors } from "./src/config/styles";

export default function App() {
  return (
    <>
      <OfflineBar />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      <StatusBar style="light" backgroundColor={colors.primary} />
    </>
  );
}
