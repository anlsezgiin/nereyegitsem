// app/index.tsx

//TODO:

// LOGONUN BÜYÜKLÜĞÜ OTURMUYOR GÜNCELLENECEK BEN BECEREMEDİM - Anıl Sezgin
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import fonts from '~/config/fonts';
import colors from '~/config/colors';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>Nereye{'\n'}Gitsem</Text>
        <Text style={styles.subTitle}>Yapay Zeka Destekli Mekan{'\n'}Öneri Uygulaması</Text>
      </View>

      <Text style={styles.description}>
        "Doğum günü mü? İlk buluşma mı? Hangi mekana gideceğini biz biliyoruz!"
        Filtrele, keşfet, favorilerine ekle.
      </Text>

      <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('login' as any)}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn} onPress={() => router.push('signup'as any)}>
        <Text style={styles.registerText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 180,
    paddingHorizontal: 32,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logo: {
    width: 223,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    color: '#4D55CC',
    fontWeight: '300',
    lineHeight: 45,
  },
  subTitle: {
    fontSize: 12,
    color: '#4D55CC',
    textAlign: 'center',
    fontWeight: 900,
    marginTop: 2,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#070707',
    textAlign: 'center',
    marginBottom: 40,
    width: 267,
  },
  loginBtn: {
    width: 207,
    height: 45,
    borderRadius: 30,
    backgroundColor: colors.ngcolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    fontFamily: fonts.regular
  },
  loginText: {
    color: '#fff',
    fontFamily: fonts.regular,
    fontSize: 18,
    fontWeight: 500
  },
  registerBtn: {
    width: 207,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#CAD6FF',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'League Spartan'
  },
  registerText: {
    color: '#4D55CC',
    fontFamily: fonts.regular,
    fontSize: 18,
    fontWeight: 500
  },
});