import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import PasswordInput from "./components/PasswordInput";
import colors from "../config/colors";
import fonts from "../config/fonts";

const PasswordManagerScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Hata", "Yeni şifreler uyuşmuyor.");
      return;
    }

    Alert.alert("Başarılı", "Şifreniz başarıyla güncellendi.");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Geri Buton + Başlık */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color={colors.ngcolor} />
        </TouchableOpacity>
        <Text style={styles.title}>Şifre Yönetimi</Text>
        <View style={{ width: 24 }} /> {/* Simetri için boşluk */}
      </View>

      <Text style={styles.label}>Güncel Şifre</Text>
      <PasswordInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />

      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "Şifre Sıfırlama",
            "Şifre sıfırlama bağlantısı mail adresinize gönderildi."
          );
        }}
      >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Yeni Şifre</Text>
      <PasswordInput value={newPassword} onChangeText={setNewPassword} />

      <Text style={styles.label}>Yeni Şifreyi Onayla</Text>
      <PasswordInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
        <Text style={styles.buttonText}>Şifreyi Değiştir</Text>
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
