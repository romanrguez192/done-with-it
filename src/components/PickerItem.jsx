import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { MyText } from ".";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MyText style={styles.text}>{label}</MyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    padding: 15,
  },
});

export default PickerItem;
