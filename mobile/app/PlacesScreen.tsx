import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PlaceCardHeader from "./components/PlaceCardHeader";
import PlaceCard from "./components/PlaceCard";
import { Place } from "./components/PlaceCard";


// Data API'den gelicek yani bu kısım güncellenecek
const mockData: Place[] = [
  {
    name: "Bluewater Cafe",
    category: "Cafe & Restaurant",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
  },
  {
    name: "Sunset Bar",
    category: "Bar & Lounge",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80",
    infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
  },
  {
    name: "Oceanview Hotel",
    category: "Hotel",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
  },
];

const PlacesScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = mockData.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 80 }}>
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
