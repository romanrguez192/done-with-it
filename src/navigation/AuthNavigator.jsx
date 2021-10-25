import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { InitialScreen, LoginScreen, SignUpScreen } from "../screens/";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Log In" component={LoginScreen} />
    <Stack.Screen name="Sign Up" component={SignUpScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
