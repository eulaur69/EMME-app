import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GEOPARKS, CHAPTERS } from "../constants/data";
import { openLink } from "../utils/linking";
import Card from "../components/Card";
import FlagButton from "../components/FlagButton";
import BiggerButton from "../components/BiggerButton";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.card, { alignItems: "center" }]}>
        <Text style={styles.title}>Meet your Geoparks!</Text>
        <View style={[styles.row, { gap: 20 }]}>
          {GEOPARKS.map((geopark, index) => (
            <FlagButton
              key={index}
              flag={geopark.flag}
              onPress={() => openLink(geopark.link)}
            />
          ))}
        </View>
      </View>

      {Object.entries(CHAPTERS).map(([id, chapter]) => (
        <Card
          key={id}
          image={chapter.image}
          title={chapter.title}
          description={chapter.description}
          onPress={() => navigation.navigate(id)}
        />
      ))}

      <BiggerButton
        text="Carbon Footprint Calculator"
        onPress={() => openLink("https://www.footprintcalculator.org/home/en")}
      />

      <View style={{ paddingBottom: 50 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
  },
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
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default HomeScreen;
