import React from "react";
import { FlatList } from "react-native";

import { Screen, Card, Text, Button, ActivityIndicator } from "../components";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen>
      {getListingsApi.error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <Button onPress={getListingsApi.request}>Retry</Button>
        </>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            description={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </Screen>
  );
}

export default ListingsScreen;
