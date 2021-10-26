import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import Text from "./Text";
import { colors } from "../config/styles";

function Card({ title, description, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
