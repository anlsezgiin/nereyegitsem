import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// Update edilmesi gereken UI bileşenleri var
const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Text style={styles.time}>16:04</Text>

      <Text style={styles.pageTitle}>Giriş Yap</Text>
      <Text style={styles.welcome}>Hoşgeldiniz</Text>
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Text style={styles.label}>Email veya Telefon Numarası</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} placeholder="example@example.com" placeholderTextColor="#999" />
      </View>

      <Text style={[styles.label, { marginTop: 20 }]}>Şifre</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="*****"
          placeholderTextColor="#999"
          secureTextEntry={secureText}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Text style={styles.eyeIcon}>👁️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Giriş Yap</Text>
      </TouchableOpacity>

      <Text style={styles.or}>veya şununla devam et</Text>

      <View style={styles.googleBox}>
        <Text style={styles.googleIcon}>G</Text>
      </View>

      <Text style={styles.signupLink}>
        Hesabın mı yok? <Text style={styles.signupText}>Kayıt Ol</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  statusBar: {
    width: '100%',
    height: 28,
    backgroundColor: '#E2EAFF',
    position: 'absolute',
    top: 0,
  },
  time: {
    position: 'absolute',
    top: 9,
    left: 27,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'League Spartan',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4D55CC',
    textAlign: 'center',
    marginTop: 63,
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4D55CC',
    marginTop: 48,
  },
  desc: {
    fontSize: 12,
    color: '#000',
    fontWeight: '300',
    width: 299,
    marginTop: 5,
  },
  label: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: '500',
  },
  inputBox: {
    backgroundColor: '#ECF1FF',
    height: 45,
    borderRadius: 13,
    paddingHorizontal: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    fontSize: 16,
  },
  forgotPassword: {
    color: '#4D55CC',
    fontSize: 12,
    fontWeight: '500',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#4D55CC',
    borderRadius: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  or: {
    textAlign: 'center',
    color: '#999',
    marginTop: 15,
  },
  googleBox: {
    borderWidth: 2,
    borderColor: '#4D55CC',
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupLink: {
    textAlign: 'center',
    marginTop: 15,
  },
  signupText: {
    color: '#4D55CC',
    fontWeight: '500',
  },
});

export default LoginScreen;