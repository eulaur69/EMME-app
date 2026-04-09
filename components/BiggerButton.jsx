import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const BiggerButton = ({ text, onPress }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.biggerButton} onPress={onPress}>
        <Text style={styles.biggerButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  biggerButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 0,
    alignItems: "center",
  },
  biggerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BiggerButton;
