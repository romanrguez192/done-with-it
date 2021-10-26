import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

import { Text } from "../components";
import { ListItem } from "../components/lists";
import { colors } from "../config/styles";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <ScrollView>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem image={require("../assets/mosh.jpg")} title="Román Rodríguez" description="5 Listings" />
      </View>
    </ScrollView>
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
