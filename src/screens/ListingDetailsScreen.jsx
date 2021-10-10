import React from "react";
import { View, StyleSheet, Image } from "react-native";

import MyText from "../components/MyText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <MyText style={styles.title}>Red jacket for sale</MyText>
        <MyText style={styles.price}>$100</MyText>
        <View style={styles.userContainer}>
          <ListItem image={require("../assets/mosh.jpg")} title="Román Rodríguez" description="5 Listings" />
        </View>
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
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
