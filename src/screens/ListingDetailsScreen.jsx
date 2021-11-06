import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import { Text, ContactForm } from "../components";
import { ListItem } from "../components/lists";
import { colors } from "../config/styles";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>
      <View style={styles.userContainer}>
        <ListItem image={require("../assets/mosh.jpg")} title="Román Rodríguez" description="5 Listings" />
      </View>
      <View style={styles.formContainer}>
        <ContactForm listing={listing} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  formContainer: {
    padding: 15,
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
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
