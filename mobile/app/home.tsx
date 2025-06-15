import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const router = useRouter();

  const [userName, setUserName] = useState("Kullanıcı");
  const [loading, setLoading] = useState(false);

  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);
  const [customPurpose, setCustomPurpose] = useState("");

  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [customPrice, setCustomPrice] = useState("");

  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [customLocation, setCustomLocation] = useState("");

  const [selectedPlaceType, setSelectedPlaceType] = useState<string | null>(null);
  const [customPlaceType, setCustomPlaceType] = useState("");

  const purposes = ["Doğum Günü", "Ders Çalışmak", "Yıl Dönümü"];
  const priceRanges = ["200-400", "400-600", "600-1000", "1000+"];
  const locations = ["Beşiktaş", "Taksim", "Levent"];
  const placeTypes = ["Cafe", "Bar", "Fast-Food"];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://82.153.241.184:5000/User/getById/6");
        const user = response.data;
        if (user?.name) {
          setUserName(user.name);
        }
      } catch (error) {
        console.log("Kullanıcı bilgisi alınamadı:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async () => {
  const filters = {
    purpose: selectedPurpose || customPurpose,
    price: selectedPrice || customPrice,
    location: selectedLocation || customLocation,
    type: selectedPlaceType || customPlaceType,
  };

  try {
    setLoading(true);

    const token = await AsyncStorage.getItem("userToken");

    const prompt = `"Lütfen tam olarak 3 adet gerçek mekan önerisi ver, lokasyon: ${filters.location}, amaç: ${filters.purpose}, fiyat aralığı: ${filters.price}, mekan türü: ${filters.type}.
Yalnızca Google Haritalar'da bulunabilen gerçek mekanları öner. Uydurma isimler kullanma.
Sadece aşağıdaki gibi bir JSON dizi formatında yanıt ver:
    [
      {
        "name": "Example Name",
        "category": "Cafe",
        "image": "https://example.com/img.jpg",
        "infoIcon": "Wi-Fi"
      }
    ] — Açıklama, markdown, fazladan yazı ekleme — sadece JSON verisi gönder.`;

    const aiResponse = await axios.post(
      "http://82.153.241.184:5000/AI/ask",
      {
        userId: 6,
        prompt: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    let raw = aiResponse.data.response;
    const cleaned = raw
      .replace(/```json/, "")
      .replace(/```/, "")
      .trim();

    const parsed = JSON.parse(cleaned);
    router.push({ pathname: "/PlacesScreen", params: { data: JSON.stringify(parsed) } });
  } catch (err) {
    console.log("AI ERROR:", err);
    Alert.alert("Hata", "Mekan önerileri alınamadı.");
  } finally {
    setLoading(false);
  }
};


  const resetFilters = () => {
    setSelectedPurpose(null);
    setCustomPurpose("");
    setSelectedPrice(null);
    setCustomPrice("");
    setSelectedLocation(null);
    setCustomLocation("");
    setSelectedPlaceType(null);
    setCustomPlaceType("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/ProfileScreen")}
          style={styles.profileContainer}
        >
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.profileImage}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.greeting}>Hoşgeldiniz!</Text>
            <Text style={styles.username}>{userName}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/SettingsScreen")}>
          <Ionicons name="settings-outline" size={24} color="#4D55CC" />
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Nereye Gitsem?</Text>
      <Text style={styles.subHeading}>
        Nereye Gideceğini Düşünme{"\n"}Ne İstediğini Seç Biz Senin İçin Buluruz!
      </Text>

      {/* Amaç */}
      <Text style={styles.label}>Ne için gitmek istiyorsun?</Text>
      <View style={styles.optionsWrapper}>
        {purposes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.optionButton, selectedPurpose === item && styles.optionSelected]}
            onPress={() => {
              setSelectedPurpose(item);
              setCustomPurpose(item);
            }}
          >
            <Text style={[styles.optionText, selectedPurpose === item && styles.optionTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        placeholder="Kendi amacınızı girin"
        value={customPurpose}
        onChangeText={setCustomPurpose}
        style={styles.input}
      />

      {/* Fiyat */}
      <Text style={styles.label}>Ortalama fiyatlar nasıl olsun?</Text>
      <View style={styles.optionsWrapper}>
        {priceRanges.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.optionButton, selectedPrice === item && styles.optionSelected]}
            onPress={() => {
              setSelectedPrice(item);
              setCustomPrice(item);
            }}
          >
            <Text style={[styles.optionText, selectedPrice === item && styles.optionTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        placeholder="Kendi fiyat aralığını gir"
        value={customPrice}
        onChangeText={setCustomPrice}
        style={styles.input}
      />

      {/* Konum */}
      <Text style={styles.label}>Hangi konumda mekan arıyorsunuz?</Text>
      <View style={styles.optionsWrapper}>
        {locations.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.optionButton, selectedLocation === item && styles.optionSelected]}
            onPress={() => {
              setSelectedLocation(item);
              setCustomLocation(item);
            }}
          >
            <Text style={[styles.optionText, selectedLocation === item && styles.optionTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        placeholder="Kendi konumunu gir"
        value={customLocation}
        onChangeText={setCustomLocation}
        style={styles.input}
      />

      {/* Yer Tipi */}
      <Text style={styles.label}>Nasıl bir yer arıyorsun?</Text>
      <View style={styles.optionsWrapper}>
        {placeTypes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.optionButton, selectedPlaceType === item && styles.optionSelected]}
            onPress={() => {
              setSelectedPlaceType(item);
              setCustomPlaceType(item);
            }}
          >
            <Text style={[styles.optionText, selectedPlaceType === item && styles.optionTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        placeholder="Kendi yer tipini yaz"
        value={customPlaceType}
        onChangeText={setCustomPlaceType}
        style={styles.input}
      />

      {/* Butonlar */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
          <Text style={styles.resetText}>Sıfırla</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.submitText}>Mekan Öner</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },
  greeting: {
    fontSize: 12,
    color: "#4D55CC",
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4D55CC",
    textAlign: "center",
    marginBottom: 10,
  },
  subHeading: {
    textAlign: "center",
    fontSize: 13,
    color: "#4D55CC",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#000",
    fontWeight: "500",
  },
  optionsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  optionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#F0F4FF",
    marginRight: 8,
    marginBottom: 8,
  },
  optionSelected: {
    backgroundColor: "#4D55CC",
  },
  optionText: {
    fontSize: 13,
    color: "#4D55CC",
  },
  optionTextSelected: {
    color: "#fff",
  },
  input: {
    backgroundColor: "#F0F4FF",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 13,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: "#D9534F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    width: 120,
  },
  resetText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  submitButton: {
    backgroundColor: "#4D55CC",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    width: 160,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
});
