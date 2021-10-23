import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import InitialScreen from "./src/screens/InitialScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";

import Screen from "./src/components/Screen";
import Picker from "./src/components/Picker";
import PickItem from "./src/components/PickerItem";

export default function App() {
  return <ListingEditScreen />;
}
