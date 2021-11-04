import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigationTheme";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import useAuth from "../hooks/useAuth";

const Navigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer theme={navigationTheme}>{user ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default Navigator;
