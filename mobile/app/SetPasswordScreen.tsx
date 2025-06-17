import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmPassword = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurun.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Hata", "Şifre en az 8 karakter olmalıdır.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Alert.alert("Hata", "Şifre en az bir büyük harf içermelidir.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      Alert.alert("Hata", "Şifre en az bir küçük harf içermelidir.");
      return;
    }

    if (!/[0-9]/.test(password)) {
      Alert.alert("Hata", "Şifre en az bir rakam içermelidir.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Alert.alert("Hata", "Şifre en az bir sembol içermelidir.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Hata", "Şifreler uyuşmuyor.");
      return;
    }

    Alert.alert("Başarılı", "Şifre başarıyla onaylandı.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifre</Text>
      <Text style={styles.subtitle}>
        Şifreniz en az 8 karakter olmalı; büyük-küçük harf, rakam ve sembol
        içermelidir. Güvenliğiniz için şifrenizi kimseyle paylaşmayınız.
      </Text>

      <Text style={styles.label}>Şifre</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="**"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
        />
      </View>

      <Text style={styles.label}>Şifreyi Onayla</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="**"
          secureTextEntry={!showConfirm}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => setShowConfirm(!showConfirm)}
          style={styles.eyeIcon}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirmPassword}>
        <Text style={styles.buttonText}>Şifreyi Onayla</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    color: "#4D55CC",
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: "#070707",
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: "#ECF1FF",
    borderRadius: 13,
    height: 45,
    marginBottom: 20,
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 15,
    fontWeight: "400",
    color: "#000",
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 12,
    width: 20,
    height: 16,
    borderWidth: 1,
    borderColor: "#000",
  },
  button: {
    backgroundColor: "#4D55CC",
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  },
});