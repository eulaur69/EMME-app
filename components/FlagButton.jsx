import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const FlagButton = ({ flag, onPress }) => {
  return (
    <TouchableOpacity style={styles.circleButton} onPress={onPress}>
      <Image source={flag} style={styles.circleImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden", // makes the image circular
  },
  circleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default FlagButton;
