import React, { useState } from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import PlaceCard, { Place } from "./components/PlaceCard";

export default function Favoriler() {
  const router = useRouter();

  interface FavoriteItem extends Place {
    id: string;
    favorite: boolean;
  }

  // mock data kısmında oluşturulan JSON'lar güncellenebilir
  const [data, setData] = useState<FavoriteItem[]>([
    {
      id:"1",
      name: "Bluewater Cafe",
      category: "Cafe & Restaurant",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
      favorite: false,
    },
    {
      id: "2",
      name: "Sunset Bar",
      category: "Cafe & Restaurant",
      image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
      favorite: false,
    },
    {
      id: "4",
      name: "Oceanview Hotel",
      category: "Hotel",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
      favorite: true,
    },
     {
      id: "5",
      name: "Oceanview Hotel",
      category: "Hotel",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
      favorite: true,
    },
     {
      id: "6",
      name: "Oceanview Hotel",
      category: "Hotel",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
      favorite: true,
    },
     {
      id: "3",
      name: "Oceanview Hotel",
      category: "Hotel",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png",
      favorite: true,
    },
  ]);

  const toggleFavorite = (id: string) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const handleDetail = (name: string) => {
    console.log(`"${name}" detaylarına gidilecek`);
  };

  const renderItem = ({ item }: { item: FavoriteItem }) => (
    <PlaceCard
      place={item}
      onToggleFavorite={() => toggleFavorite(item.id)}
      onPressDetail={() => handleDetail(item.name)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 20, marginLeft: 29 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/dneqblap_expires_30_days.png" }}
            resizeMode="stretch"
            style={{ borderRadius: 30, width: 8, height: 13, marginRight: 84 }}
          />
        </TouchableOpacity>
        <Text style={{ color: "#225FFF", fontSize: 24, fontWeight: "bold" }}>Favoriler</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}
