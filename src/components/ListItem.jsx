import React from "react";
import { View, StyleSheet, Image } from "react-native";

import MyText from "./MyText";
import colors from "../config/colors";

function ListItem({ title, description, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <MyText style={styles.title}>{title}</MyText>
        <MyText style={styles.description}>{description}</MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  description: {
    fontSize: 18,
    color: colors.medium,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ListItem;
