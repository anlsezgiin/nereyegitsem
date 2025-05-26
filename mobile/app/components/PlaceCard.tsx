import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import colors from "~/config/colors";

export interface Place {
  name: string;
  category: string;
  image: string;
  infoIcon: string;
}

interface PlaceCardProps {
  place: Place;
  onToggleFavorite?: () => void;
  onPressDetail?: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleCardPress = () => {
    router.push('/PlaceInfo');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <Image source={{ uri: place.image }} resizeMode="cover" style={styles.image} />
      <View style={styles.info}>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={styles.category}>{place.category}</Text>
          </View>
          <TouchableOpacity 
            onPress={handleFavorite}
            style={styles.favoriteButton} 
          >
            <Ionicons
              name={isFavorited ? "heart" : "heart-outline"}
              size={24}
              color={isFavorited ? colors.ngcolor : colors.ngcolor}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#C9D5FF",
    borderRadius: 17,
    paddingVertical: 12,
    paddingHorizontal: 11,
    marginBottom: 15,
    marginHorizontal: 32,
  },
  image: {
    width: 107,
    height: 107,
    marginRight: 8,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    color: "#225FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
    marginHorizontal: 1,
  },
  category: {
    color: "#000000",
    fontSize: 13,
    marginBottom: 14,
    marginLeft: 1,
  },
  favoriteButton: {
    padding: 5,
  },
});
