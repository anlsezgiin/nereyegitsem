import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter, useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import colors from "../config/colors";
import fonts from "../config/fonts";

const USER_ID = 6;
const API_URL = `http://82.153.241.184:5000/User/getById/${USER_ID}`;

export default function ProfileScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("Yükleniyor...");

  useEffect(() => {
    fetchUserName();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const checkAuth = async () => {
        const token = await AsyncStorage.getItem("userToken");
        if (!token) {
          router.replace("/login");
        }
      };
      checkAuth();
    }, [])
  );

  const fetchUserName = async () => {
    try {
      const response = await axios.get(API_URL);
      const { name, surname } = response.data;
      setFullName(`${name} ${surname}`);
    } catch (error) {
      Alert.alert("Hata", "Kullanıcı bilgisi alınamadı.");
      setFullName("John Doe");
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    router.replace("/login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Profilim</Text>

      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/1.jpg",
          }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>{fullName}</Text>

      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/EditProfileScreen")}
        >
          <Ionicons name="person" size={22} color={colors.ngcolor} />
          <Text style={styles.menuLabel}>Profil</Text>
          <Feather
            name="chevron-right"
            size={20}
            color={colors.gray}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/favoriler")}
        >
          <Ionicons name="heart" size={22} color={colors.ngcolor} />
          <Text style={styles.menuLabel}>Favori Mekanlar</Text>
          <Feather
            name="chevron-right"
            size={20}
            color={colors.gray}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/PrivacyPolicyScreen")}
        >
          <Ionicons name="lock-closed" size={22} color={colors.ngcolor} />
          <Text style={styles.menuLabel}>Gizlilik Sözleşmesi</Text>
          <Feather
            name="chevron-right"
            size={20}
            color={colors.gray}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/SettingsScreen")}
        >
          <Ionicons name="settings" size={22} color={colors.ngcolor} />
          <Text style={styles.menuLabel}>Ayarlar</Text>
          <Feather
            name="chevron-right"
            size={20}
            color={colors.gray}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Ionicons name="log-out" size={22} color={colors.ngcolor} />
          <Text style={styles.menuLabel}>Çıkış Yap</Text>
          <Feather
            name="chevron-right"
            size={20}
            color={colors.gray}
            style={{ marginLeft: "auto" }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 24,
    flexGrow: 1,
  },
  headerText: {
    marginTop: 50,
    fontSize: 24,
    fontFamily: fonts.bold,
    textAlign: "center",
    color: colors.ngcolor,
    marginBottom: 20,
  },
  avatarWrapper: {
    alignSelf: "center",
    marginBottom: 10,
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.gray,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.medium,
    textAlign: "center",
    marginBottom: 20,
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  menuLabel: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
