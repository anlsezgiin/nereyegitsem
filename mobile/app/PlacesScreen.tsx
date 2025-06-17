import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PlaceCard, { Place } from "./components/PlaceCard";
import PlaceCardHeader from "./components/PlaceCardHeader";

const initialMockData: Place[] = [
  {
    name: "MOC Nişantaşı",
    category: "Cafe",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    infoIcon: "☕️ Wi-Fi, Quiet",
    address: "Teşvikiye Mah. Şakayık Sok. No:4/A, Şişli/İstanbul",
    description: "MOC Nişantaşı, rahat atmosferi ve güçlü kahveleriyle ders çalışmak için ideal. Sessiz ortamı ve yüksek hızlı Wi-Fi bağlantısı mevcut."
  },
  {
    name: "Cup of Joy Beşiktaş",
    category: "Cafe",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    infoIcon: "📶 Wi-Fi, Power Outlets",
    address: "Sinanpaşa, Ihlamurdere Cd. No:6, Beşiktaş/İstanbul",
    description: "Cup of Joy, kahve tutkunlarının uğrak noktası. Rahat koltuklar, sessiz ortam ve prizli masalarıyla öğrencilerin favorisi."
  },
  {
    name: "Story Coffee & Roastery",
    category: "Cafe",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    infoIcon: "📚 Study-Friendly, Cozy",
    address: "Abbasağa Mah. Ihlamurdere Cad. No:92, Beşiktaş/İstanbul",
    description: "Story Coffee, ders çalışmak isteyenler için samimi ve huzurlu bir ortam sunar. Kahveleri kaliteli, çalışanlar güler yüzlü."
  }
];

const PlacesScreen = () => {
  const [data, setData] = useState<Place[]>(initialMockData);

  const handleSearchChange = (searchText: string) => {
    if (searchText.trim() === "") {
      setData(initialMockData);
    } else {
      const filtered = initialMockData.filter((place) =>
        place.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <PlaceCardHeader onSearchChange={handleSearchChange} />
        {data.map((place) => (
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
});