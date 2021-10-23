import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { Text } from "../components";
import { ListItem } from "../components/lists";
import { colors } from "../config/styles";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem image={require("../assets/mosh.jpg")} title="Román Rodríguez" description="5 Listings" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  price: {
    color: colors.primary,
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
