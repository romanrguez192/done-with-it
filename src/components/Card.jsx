import React from "react";
import { View, StyleSheet, Image } from "react-native";

import MyText from "./MyText";
import { colors } from "../config/styles";

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
    borderRadius: 18,
    backgroundColor: colors.white,
    margin: 15,
    overflow: "hidden",
    elevation: 5,
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
    color: colors.primary,
  },
  title: {
    fontSize: 18,
    marginBottom: 7,
  },
});

export default Card;
