import React from "react";
import { View, StyleSheet, Image } from "react-native";

import MyText from "./MyText";
import colors from "../config/colors";

function Card({ title, description, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <MyText style={styles.title}>{title}</MyText>
        <MyText style={styles.description}>{description}</MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  description: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    marginBottom: 7,
  },
});

export default Card;
