import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import { colors } from "../config/styles";

function Picker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (item) => {
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
          <Text style={styles.text}>
            {selectedItem ? (
              <Text style={styles.text}>{selectedItem.label}</Text>
            ) : (
              <Text style={styles.placeholder}>{placeholder}</Text>
            )}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent item={item} label={item.label} onPress={() => handlePress(item)} />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
  text: {
    flex: 1,
    fontSize: 18,
  },
});

export default Picker;
