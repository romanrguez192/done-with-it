import React from "react";
import AccountScreen from "./src/screens/AccountScreen";
import InitialScreen from "./src/screens/InitialScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";

import Screen from "./src/components/Screen";
import MyPicker from "./src/components/MyPicker";
import PickItem from "./src/components/PickerItem";

export default function App() {
  return (
    <Screen>
      <MyPicker
        icon="email"
        placeholder="Email"
        items={[
          { label: "Primero", value: 1 },
          { label: "Segundo", value: 2 },
          { label: "Tercero", value: 3 },
          { label: "Cuarto", value: 4 },
          { label: "Quinto", value: 5 },
          { label: "Sexto", value: 6 },
          { label: "Septimo", value: 7 },
          { label: "Octavo", value: 8 },
        ]}
      />
    </Screen>
  );
}
