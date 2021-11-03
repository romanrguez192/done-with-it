import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import OfflineBar from "./OfflineBar";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <OfflineBar />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
