import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import colors from "../config/colors";
import fonts from "../config/fonts";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity style={styles.item}>
        <Feather name="key" size={20} color={colors.ngcolor} />
        <Text style={styles.label}>Password Manager</Text>
        <Feather
          name="chevron-right"
          size={20}
          color="#ccc"
          style={{ marginLeft: "auto" }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.ngcolor,
    textAlign: "center",
    marginBottom: 30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
