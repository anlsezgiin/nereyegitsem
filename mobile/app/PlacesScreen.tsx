import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PlaceCardHeader from "./components/PlaceCardHeader";
import PlaceCard, { Place } from "./components/PlaceCard";

const PlacesScreen: React.FC = () => {
  const { data } = useLocalSearchParams();
  const [searchTerm, setSearchTerm] = React.useState("");

  let parsedData: Place[] = [];

  try {
    const parsed = data ? JSON.parse(data as string) : [];
    parsedData = Array.isArray(parsed) ? parsed : [];
    console.log("PARSED DATA", parsedData);
  } catch (err) {
    console.error("Veri parse edilemedi:", err);
  }

  const filteredData = parsedData.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <PlaceCardHeader onSearchChange={setSearchTerm} />
        {filteredData.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
});
