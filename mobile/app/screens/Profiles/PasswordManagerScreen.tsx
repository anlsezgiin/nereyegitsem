// app/screens/Profile/PasswordManagerScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PasswordInput from '../../components/PasswordInput';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';

const PasswordManagerScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Şifre Yönetimi</Text>

      <Text style={styles.label}>Güncel Şifre</Text>
      <PasswordInput value={currentPassword} onChangeText={setCurrentPassword} />

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Yeni Şifre</Text>
      <PasswordInput value={newPassword} onChangeText={setNewPassword} />

      <Text style={styles.label}>Yeni Şifreyi Onayla</Text>
      <PasswordInput value={confirmPassword} onChangeText={setConfirmPassword} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Şifreyi Değiştir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PasswordManagerScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    color: colors.ngcolor,
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.medium,
    color: colors.black,
    marginTop: 16,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 8,
    color: colors.ngcolor,
    fontFamily: fonts.medium,
  },
  button: {
    backgroundColor: colors.ngcolor,
    paddingVertical: 14,
    borderRadius: 32,
    marginTop: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.medium,
  },
});
