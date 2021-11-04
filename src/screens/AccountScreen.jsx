import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Icon } from "../components";
import { ListItem, ListItemSeparator } from "../components/lists";
import { colors } from "../config/styles";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <View>
      <View style={styles.container}>
        <ListItem title={user.name} description={user.email} image={require("../assets/mosh.jpg")} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              Icon={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem title="Log Out" Icon={<Icon name="logout" backgroundColor={colors.alert} />} onPress={logOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
