import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ListingsScreen, ListingDetailsScreen } from "../screens";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator presentation="modal">
    <Stack.Screen name="Listings" component={ListingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerTitle: "Details" }} />
  </Stack.Navigator>
);

export default FeedNavigator;
