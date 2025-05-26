import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import colors from "../config/colors";
import fonts from "../config/fonts";

// Mock datalı, güncellenecek
export default function EditProfileScreen() {
  const [fullName, setFullName] = useState("John Doe");
  const [phone, setPhone] = useState("+123 567 89000");
  const [email, setEmail] = useState("johndoe@example.com");
  const [birthDate, setBirthDate] = useState("");
  const [avatarUri, setAvatarUri] = useState("https://randomuser.me/api/portraits/men/1.jpg");

  // Doğum tarihi formatlama
  const handleBirthDateChange = (text: string) => {
    let formatted = text.replace(/[^\d]/g, "");
    if (formatted.length > 2 && formatted.length <= 4) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
    } else if (formatted.length > 4) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}/${formatted.slice(4, 8)}`;
    }
    setBirthDate(formatted);
  };

  // Telefon numarası filtreleyici
  const handlePhoneChange = (text: string) => {
    const filtered = text.replace(/[^\d+]/g, "");
    setPhone(filtered);
  };

  // Profil fotoğrafı seçici
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("İzin Gerekli", "Fotoğraf seçmek için galeri izni vermeniz gerekiyor.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled && result.assets.length > 0) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  // Geçici fake API GÜNCELLENECEK
  const fakeUpdateProfile = async () => {
    return new Promise((resolve) => setTimeout(() => resolve({ status: 200 }), 200));
  };

  // Profili güncelleme GÜNCELLENECEK
  const handleSubmit = async () => {
    if (!fullName || !phone || !email || !birthDate) {
      Alert.alert("Hata", "Lütfen tüm alanları doldurunuz.");
      return;
    }

    const response: any = await fakeUpdateProfile();

    if (response.status === 200) {
      Alert.alert("Başarılı", "Profil bilgileri başarıyla güncellendi!");
    } else {
      Alert.alert("Hata", "Bir şeyler ters gitti.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Profile</Text>

      <View style={styles.avatarWrapper}>
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
        <TouchableOpacity onPress={pickImage} style={styles.editIcon}>
          <Feather name="edit-2" size={16} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>İsim Soyisim</Text>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Telefon Numarası</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={handlePhoneChange}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Doğum Tarihi</Text>
        <TextInput
          style={styles.input}
          value={birthDate}
          onChangeText={handleBirthDateChange}
          placeholder="GG/AA/YYYY"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Profili Güncelle</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    fontFamily: fonts.bold,
    textAlign: "center",
    color: colors.ngcolor,
    marginTop: 50,
    marginBottom: 20,
  },
  avatarWrapper: {
    alignSelf: "center",
    position: "relative",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.gray,
  },
  editIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: colors.ngcolor,
    borderRadius: 10,
    padding: 6,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F0F4FF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  button: {
    marginTop: 24,
    backgroundColor: colors.ngcolor,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});
