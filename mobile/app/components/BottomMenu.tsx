import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const windowWidth = Dimensions.get('window').width;

const BottomMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (routes: string[]) =>
    routes.some((route) => pathname.startsWith(route));

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push('/home')}>
          <Ionicons
            name={isActive(['/home', '/PlacesScreen']) ? 'home' : 'home-outline'}
            size={26}
            color={isActive(['/home', '/PlacesScreen']) ? '#fff' : '#1B1B1F'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/favoriler')}>
          <Ionicons
            name={isActive(['/favoriler']) ? 'heart' : 'heart-outline'}
            size={26}
            color={isActive(['/favoriler']) ? '#fff' : '#1B1B1F'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/ProfileScreen')}>
          <Ionicons
            name={
              isActive([
                '/ProfileScreen',
                '/EditProfileScreen',
                '/SettingsScreen',
                '/PasswordManagerScreen',
              ])
                ? 'person'
                : 'person-outline'
            }
            size={26}
            color={
              isActive([
                '/ProfileScreen',
                '/EditProfileScreen',
                '/SettingsScreen',
                '/PasswordManagerScreen',
              ])
                ? '#fff'
                : '#1B1B1F'
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    paddingBottom: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4D55CC',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 10,
  },
});
