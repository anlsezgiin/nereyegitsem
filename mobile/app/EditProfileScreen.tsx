import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";
import fonts from "../config/fonts";

export default function EditProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Profile</Text>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.avatar}
        />
        <Feather
          name="edit-2"
          size={16}
          color="white"
          style={styles.editIcon}
        />
      </View>

      {/* Inputs */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>İsim Soyisim</Text>
        <TextInput style={styles.input} value="John Doe" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Telefon Numarası</Text>
        <TextInput style={styles.input} value="+123 567 89000" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} value="johndoe@example.com" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Doğum Tarihi</Text>
        <TextInput style={styles.input} placeholder="DD / MM / YYYY" />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
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
    padding: 4,
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
