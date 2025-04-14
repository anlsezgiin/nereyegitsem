import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="chevron-back" size={20} color="#4D55CC" />
        <Text style={styles.title}>Yeni Hesap</Text>
      </View>

      <Label text="İsim Soyisim" />
      <Input placeholder="example@example.com" />

      <Label text="Şifre" />
      <Input placeholder="****" secure icon />

      <Label text="Email" />
      <Input placeholder="example@example.com" />

      <Label text="Telefon Numarası" />
      <Input placeholder="example@example.com" />

      <Label text="Doğum Tarihi" />
      <Input placeholder="DD / MM / YYYY" />

      <Text style={styles.termsText}>
        By continuing, you agree to <Text style={styles.link}>Terms of Use and Privacy Policy.</Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>veya şununla devam et</Text>

      <View style={styles.googleIcon}>
        <Ionicons name="logo-google" size={40} color="#ccc" />
      </View>

      <Text style={styles.loginText}>
        Zaten hesabın var mı? <Text style={styles.link}>Giriş Yap</Text>
      </Text>
    </ScrollView>
  );
}

const Label = ({ text }) => (
  <Text style={styles.label}>{text}</Text>
);

const Input = ({ placeholder, secure, icon }) => (
  <View style={styles.inputWrapper}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#809CFF"
      secureTextEntry={secure}
      style={styles.input}
    />
    {icon && <Ionicons name="eye-off" size={20} color="#000" style={styles.icon} />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'League Spartan',
    fontWeight: '600',
    color: '#4D55CC',
    marginLeft: 8,
  },
  label: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'League Spartan',
    marginTop: 20,
    marginBottom: 4,
  },
  inputWrapper: {
    height: 45,
    backgroundColor: '#ECF1FF',
    borderRadius: 13,
    paddingHorizontal: 16,
    justifyContent: 'center',
    position: 'relative',
  },
  input: {
    fontSize: 20,
    fontFamily: 'League Spartan',
    color: '#809CFF',
  },
  icon: {
    position: 'absolute',
    right: 16,
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'League Spartan',
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 12,
  },
  link: {
    color: '#4D55CC',
  },
  button: {
    backgroundColor: '#4D55CC',
    height: 45,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'League Spartan',
  },
  divider: {
    textAlign: 'center',
    marginVertical: 12,
    fontFamily: 'League Spartan',
    fontSize: 12,
  },
  googleIcon: {
    alignItems: 'center',
    marginBottom: 16,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'League Spartan',
  },
});