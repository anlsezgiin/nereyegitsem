// components/BottomMenu.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';
import colors from '../../config/colors';

const BottomMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (routes: string[]) => {
  return routes.some((route) => pathname.startsWith(route));
};


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/home')}>
        <Ionicons
          name="home-outline"
          size={24}
          color={isActive(['/home', '/PlacesScreen']) ? 'white' : 'black'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/favoriler')}>
        <Ionicons
          name="heart-outline"
          size={24}
          color={isActive(['/favoriler']) ? 'white' : 'black'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/ProfileScreen')}>
        <Ionicons
          name="person-outline"
          size={24}
          color={isActive(['/ProfileScreen', '/EditProfileScreen', '/SettingsScreen', '/PasswordManagerScreen']) ? 'white' : 'black'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    backgroundColor: '#4D55CC',
    borderRadius: 50,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    width: 220,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
