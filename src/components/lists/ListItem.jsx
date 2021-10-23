import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "../Text";
import { colors } from "../../config/styles";

function ListItem({ title, description, image, Icon, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.white} onPress={onPress}>
        <View style={styles.container}>
          {Icon}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {description && (
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  description: {
    color: colors.medium,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ListItem;
