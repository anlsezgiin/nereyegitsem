import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import colors from "~/src/config/colors";
import typography from "~/src/config/typography";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "LeagueSpartan-Regular": require("../assets/fonts/LeagueSpartan-Regular.ttf"),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // EKLENDİ
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Font yüklenince splash kapanır
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontFamily: typography.fontFamily,
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
