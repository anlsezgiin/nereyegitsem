import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={require('../../../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>Nereye Gitsem</Text>
        <Text style={styles.subTitle}>Yapay Zeka Destekli Mekan{'\n'}Öneri Uygulaması</Text>
      </View>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBtn}>
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
    paddingTop: 205,
    paddingHorizontal: 32,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 223,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#4D55CC',
    fontWeight: '500',
    fontFamily: 'League Spartan',
  },
  subTitle: {
    fontSize: 12,
    color: '#4D55CC',
    textAlign: 'center',
    marginTop: 2,
    fontFamily: 'League Spartan',
  },
  description: {
    fontSize: 12,
    fontWeight: '300',
    color: '#070707',
    textAlign: 'center',
    marginBottom: 40,
    width: 267,
    fontFamily: 'League Spartan',
  },
  loginBtn: {
    width: 207,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#4D55CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  loginText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'League Spartan',
  },
  registerBtn: {
    width: 207,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#CAD6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: '#4D55CC',
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'League Spartan',
  },
});