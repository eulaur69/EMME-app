import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const AppHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/emmeLogo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text style={styles.title}>EMME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 6,
    marginRight: 8,
  },
  title: {
    color: "#1B4D3E",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.8,
  },
});
