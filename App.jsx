import React from "react";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./src/navigation/AppNavigator";
import AuthProvider from "./src/auth/Provider";
import { colors } from "./src/config/styles";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
      <StatusBar style="light" backgroundColor={colors.primary} />
    </AuthProvider>
  );
}
