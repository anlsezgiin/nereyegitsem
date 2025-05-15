import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from "../config/colors";
import fonts from "../config/fonts";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Başlık */}
      <Text style={styles.headerText}>Profilim</Text>

      {/* Avatar ve isim */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/1.jpg",
          }}
          style={styles.avatar}
        />
        <Feather
          name="edit-2"
          size={16}
          color="white"
          style={styles.editIcon}
        />
      </View>
      <Text style={styles.name}>John Doe</Text>

      {/* Menü */}
      <View style={styles.menu}>
        <MenuItem icon="person" label="Profil" />
        <MenuItem icon="heart" label="Favori Mekanlar" />
        <MenuItem icon="lock-closed" label="Gizlilik Sözleşmesi" />
        <MenuItem icon="settings" label="Ayarlar" />
        <MenuItem icon="log-out" label="Çıkış Yap" />
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={icon} size={22} color={colors.ngcolor} />
      <Text style={styles.menuLabel}>{label}</Text>
      <Feather
        name="chevron-right"
        size={20}
        color={colors.gray}
        style={{ marginLeft: "auto" }}
      />
    </TouchableOpacity>
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
    fontSize: 24, // typography yerine direkt sayı
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
  editIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: colors.ngcolor,
    borderRadius: 10,
    padding: 4,
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
