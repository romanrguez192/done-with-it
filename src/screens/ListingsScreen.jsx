import React from "react";
import { FlatList } from "react-native";

import { Screen, Card } from "../components";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen() {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => <Card title={item.title} description={"$" + item.price} image={item.image} />}
      />
    </Screen>
  );
}

export default ListingsScreen;
