import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HeaderText = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/emmeLogo.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.headerText}>EMME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});

export default HeaderText;
