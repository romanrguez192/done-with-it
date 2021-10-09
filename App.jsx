import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InitialScreen from "./src/screens/InitialScreen";
import Card from "./src/components/Card";

export default function App() {
  return <InitialScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 15,
    paddingTop: 80,
  },
});
