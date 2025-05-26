import React, { useState } from "react";
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";

type FavoriteCardProps = {
  image: string;
  name: string;
  specialty: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onPressDetail: () => void;
};

const FavoriteCard: React.FC<FavoriteCardProps> = ({ image, name, specialty, isFavorite, onToggleFavorite, onPressDetail }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#C9D5FF",
      borderRadius: 18,
      paddingVertical: 9,
      paddingHorizontal: 7,
      marginBottom: 17,
      marginHorizontal: 30,
    }}>
    <Image
      source={{ uri: image }}
      resizeMode="stretch"
      style={{ borderRadius: 30, width: 68, height: 68, marginRight: 5 }}
    />
    <View style={{ flex: 1, alignItems: "flex-start" }}>
      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 3, marginLeft: 5 }}>
        <View
          style={{
            backgroundColor: "#225FFF",
            borderRadius: 13,
            paddingVertical: 3,
            paddingHorizontal: 4,
            marginRight: 3,
          }}>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/5mr9t8ti_expires_30_days.png" }}
            resizeMode="stretch"
            style={{ width: 8, height: 10 }}
          />
        </View>
        <Text style={{ color: "#225FFF", fontSize: 12 }}>Professional Doctor</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: 13,
          paddingVertical: 9,
          paddingHorizontal: 14,
          marginBottom: 5,
        }}>
        <View style={{ flex: 1, marginRight: 12 }}>
          <Text style={{ color: "#225FFF", fontSize: 14, fontWeight: "bold", marginBottom: 5 }}>{name}</Text>
          <Text style={{ color: "#000000", fontSize: 12 }}>{specialty}</Text>
        </View>
        <TouchableOpacity onPress={onToggleFavorite}>
          <Text style={{ fontSize: 16 }}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPressDetail} style={{ backgroundColor: "#225FFF", borderRadius: 13, paddingVertical: 6 }}>
        <Text style={{ color: "#FFFFFF", fontSize: 12, marginLeft: 56 }}>Detay</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function favoriler() {
  const router = useRouter();


  interface FavoriteItem {
    id: string;
    name: string;
    specialty: string;
    image: string;
    favorite: boolean;
  }

  const [data, setData] = useState<FavoriteItem[]>([
    {
      id: "1",
      name: "Dr. Olivia Turner, M.D.",
      specialty: "Dermato-Endocrinology",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/tudi3xxs_expires_30_days.png",
      favorite: true,
    },
    {
      id: "2",
      name: "Dr. Alexander Bennett, Ph.D.",
      specialty: "Dermato-Genetics",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/jkj2ft0k_expires_30_days.png",
      favorite: false,
    },
    {
      id: "3",
      name: "Dr. Sophia Martinez, Ph.D.",
      specialty: "Cosmetic Bioengineering",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png",
      favorite: true,
    },
  ]);

  const toggleFavorite = (id: string) => {
    setData((prev: FavoriteItem[]) =>
      prev.map((item: FavoriteItem) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const handleDetail = (name: string) => {
    Alert.alert("Detay", `${name} detaylarına gidilecek.`);
  };

  const renderItem = ({ item }: { item: FavoriteItem }) => (
    <FavoriteCard
      image={item.image}
      name={item.name}
      specialty={item.specialty}
      isFavorite={item.favorite}
      onToggleFavorite={() => toggleFavorite(item.id)}
      onPressDetail={() => handleDetail(item.name)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#E2EAFFA8", paddingVertical: 9, paddingHorizontal: 27 }}>
        <Text style={{ color: "#000000", fontSize: 13, fontWeight: "bold", flex: 1 }}>16:04</Text>
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/1ncermaf_expires_30_days.png" }}
          resizeMode="stretch"
          style={{ borderRadius: 30, width: 13, height: 11, marginRight: 5 }}
        />
        <View style={{ width: 15, height: 8, borderColor: "#000000", borderRadius: 58, borderWidth: 2, marginRight: 6 }} />
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/6t9n9wbx_expires_30_days.png" }}
          resizeMode="stretch"
          style={{ borderRadius: 30, width: 17, height: 9 }}
        />
      </View>

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