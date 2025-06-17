import React, { useEffect, useState, useCallback } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PlaceCard, { Place } from "./components/PlaceCard";

export default function Favoriler() {
  const [favorites, setFavorites] = useState<Place[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const fetchFavorites = async () => {
        const favs = await AsyncStorage.getItem("favorites");
        if (favs) setFavorites(JSON.parse(favs));
        else setFavorites([]);
      };
      fetchFavorites();
    }, [])
  );

  const filteredData = favorites.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/dneqblap_expires_30_days.png",
            }}
            style={styles.backIcon}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoriler</Text>
        <View style={{ width: 20 }} /> {/* Spacer */}
      </View>

      {/* Arama */}
      <TextInput
        placeholder="Favori mekan ara..."
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={styles.searchInput}
      />

      {/* Liste */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <PlaceCard place={item} />}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 24,
  },
  headerTitle: {
    color: "#225FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  backIcon: {
    borderRadius: 30,
    width: 8,
    height: 13,
    marginRight: 8,
  },
  searchInput: {
    backgroundColor: "#F0F4FF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 14,
    marginHorizontal: 24,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
