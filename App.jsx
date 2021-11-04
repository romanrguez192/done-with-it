import React from "react";
import { StatusBar } from "expo-status-bar";

import Navigator from "./src/navigation/Navigator";
import AuthProvider from "./src/auth/Provider";
import { colors } from "./src/config/styles";

export default function App() {
  return (
    <AuthProvider>
      <Navigator />
      <StatusBar style="light" backgroundColor={colors.primary} />
    </AuthProvider>
  );
}
