import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import colors from "../../../src/config/colors";
import typography from "../../../src/config/typography";

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Profilim</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
      </View>

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
      <Ionicons name={icon} size={22} color={colors.primary} />
      <Text style={styles.menuLabel}>{label}</Text>
      <Feather
        name="chevron-right"
        size={20}
        color="#ccc"
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
    fontSize: typography.fontSize["2xl"],
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeight.bold,
    textAlign: "center",
    color: colors.primary,
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.gray,
  },
  name: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeight.medium,
    marginTop: 10,
  },
  menu: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  menuLabel: {
    marginLeft: 12,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily,
  },
});
