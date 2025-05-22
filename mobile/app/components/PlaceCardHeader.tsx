import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface PlaceCardHeaderProps {
  onSearchChange: (searchText: string) => void;
}

const PlaceCardHeader: React.FC<PlaceCardHeaderProps> = ({ onSearchChange }) => {
  const router = useRouter();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearchText("");
      onSearchChange("");
    }
  };

  const onChangeSearch = (text: string) => {
    setSearchText(text);
    onSearchChange(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/j6jvntsm_expires_30_days.png" }}
          resizeMode="stretch"
          style={styles.icon}
        />
      </TouchableOpacity>

      {searchVisible ? (
        <TextInput
          style={styles.searchInput}
          placeholder="Mekan ismi ara..."
          value={searchText}
          onChangeText={onChangeSearch}
          autoFocus
          clearButtonMode="while-editing"
        />
      ) : (
        <Text style={styles.title}>Mekanlar</Text>
      )}

      <TouchableOpacity onPress={toggleSearch}>
        <Image
          source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/grojs357_expires_30_days.png" }}
          resizeMode="stretch"
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PlaceCardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EAFFA8",
    paddingVertical: 9,
    paddingHorizontal: 27,
    marginBottom: 31,
    justifyContent: "space-between",
  },
  icon: {
    borderRadius: 30,
    width: 8,
    height: 13,
  },
  title: {
    color: "#225FFF",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 20
  },
  settingsIcon: {
  borderRadius: 30,
  width: 32,   
  height: 32,
},
searchInput: {
  flex: 1,
  height: 36,
  maxWidth: 200,
  backgroundColor: "#FFFFFF",
  borderRadius: 20,
  paddingHorizontal: 15,
  paddingVertical: 0,
  fontSize: 16,
  color: "#000",
  lineHeight: 36,
  textAlignVertical: "center"
},



});
