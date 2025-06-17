import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const PlaceInfo = () => {
  const router = useRouter();
  const params: any = useLocalSearchParams();

  const {
    name,
    category,
    image,
    infoIcon,
    description,
    address,
  } = params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#4D55CC" />
          </TouchableOpacity>
          <Text style={styles.title}>{name}</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Image */}
        <Image source={{ uri: image }} style={styles.image} />

        {/* Info */}
        <View style={styles.infoBox}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{category}</Text>

          {infoIcon ? (
            <View style={styles.tag}>
              <Text style={styles.tagText}>{infoIcon}</Text>
            </View>
          ) : null}

          {address ? (
            <Text style={styles.address}>📍 {address}</Text>
          ) : null}
        </View>

        {/* Hakkında */}
        {description ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hakkında</Text>
            <Text style={styles.sectionText}>{description}</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    color: "#4D55CC",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  infoBox: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#225FFF",
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  address: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#F0F4FF",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  tagText: {
    fontSize: 13,
    color: "#4D55CC",
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4D55CC",
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});
