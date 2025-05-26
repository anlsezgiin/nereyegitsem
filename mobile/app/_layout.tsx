// app/_layout.tsx
import { Stack, usePathname } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import BottomMenu from './components/BottomMenu';

export default function Layout() {
  const pathname = usePathname();

  // Reject this screen array
  const hideMenuRoutes = [
    '/',
    '/login',
    '/signup',
    '/SetPasswordScreen',
    '/PrivacyPolicyScreen',
  ];

  const showBottomMenu = !hideMenuRoutes.includes(pathname);

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />
      {showBottomMenu && <BottomMenu />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
