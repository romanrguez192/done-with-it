import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Screen, Card, Text, Button, ActivityIndicator } from "../components";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const { data: listings, loading, error, request } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        {error && !loading && (
          <View style={styles.error}>
            <Text style={styles.errorText}>Couldn't retrieve the listings.</Text>
            <Button onPress={request}>Retry</Button>
          </View>
        )}
        {/* TODO: Si no hay Listings aún */}
        {!error && (
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                description={"$" + item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate("ListingDetails", item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  errorText: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default ListingsScreen;
