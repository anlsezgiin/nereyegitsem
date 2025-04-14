import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../config/colors";
import fonts from "../../../config/fonts";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ngcolor,
        tabBarLabelStyle: {
          fontFamily: fonts.regular, // Fonts objesi sabitse sorun olmaz
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Profiles/ProfileScreen"
        options={{
          title: "Profil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
