import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PasswordInput from "./components/PasswordInput";
import axios from "axios";
import colors from "../config/colors";
import fonts from "../config/fonts";

const USER_ID = 6;
const GET_URL = `http://82.153.241.184:5000/User/getById/${USER_ID}`;
const UPDATE_URL = `http://82.153.241.184:5000/User/update/${USER_ID}`;

const PasswordManagerScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Kullanıcı bilgilerini çek
    const fetchUserData = async () => {
      try {
        const res = await axios.get(GET_URL);
        if (res.status === 200) {
          setUserData(res.data);
        }
      } catch (err) {
        console.error("Kullanıcı verisi alınamadı:", err);
        Alert.alert("Hata", "Kullanıcı bilgileri getirilemedi.");
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Hata", "Yeni şifreler uyuşmuyor.");
      return;
    }

    if (!userData) {
      Alert.alert("Hata", "Kullanıcı verisi yüklenemedi.");
      return;
    }

    const payload = {
      ...userData,
      password: currentPassword,
      newPassword: newPassword,
    };

    try {
      setLoading(true);
      const res = await axios.put(UPDATE_URL, payload);
      setLoading(false);

      if (res.status === 200) {
        Alert.alert("Başarılı", "Şifreniz başarıyla güncellendi.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        Alert.alert("Hata", "Şifre güncellenemedi.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Şifre güncelleme hatası:", error);
      Alert.alert("Hata", "Sunucuya bağlanırken bir hata oluştu.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={colors.ngcolor} />
        </TouchableOpacity>
        <Text style={styles.title}>Şifre Yönetimi</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.label}>Güncel Şifre</Text>
      <PasswordInput value={currentPassword} onChangeText={setCurrentPassword} />

      <TouchableOpacity
        onPress={() =>
          Alert.alert("Şifre Sıfırlama", "Şifre sıfırlama bağlantısı mail adresinize gönderildi.")
        }
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Yeni Şifre</Text>
      <PasswordInput value={newPassword} onChangeText={setNewPassword} />

      <Text style={styles.label}>Yeni Şifreyi Onayla</Text>
      <PasswordInput value={confirmPassword} onChangeText={setConfirmPassword} />

      <TouchableOpacity style={styles.button} onPress={handlePasswordChange} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? "Güncelleniyor..." : "Şifreyi Değiştir"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PasswordManagerScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    color: colors.ngcolor,
    textAlign: "center",
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
    marginTop: 16,
  },
  forgot: {
    alignSelf: "flex-end",
    marginTop: 8,
    color: colors.ngcolor,
    fontFamily: fonts.medium,
  },
  button: {
    backgroundColor: colors.ngcolor,
    paddingVertical: 14,
    borderRadius: 32,
    marginTop: 32,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});
