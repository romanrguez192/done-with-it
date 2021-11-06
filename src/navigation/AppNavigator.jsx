import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./navigationTheme";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { navigationRef } from "./rootNavigation";
import useAuth from "../hooks/useAuth";

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
