import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);
  const [textInput1, setTextInput1] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#4D55CC" />
        </TouchableOpacity>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>Giriş Yap</Text>
      </View>

      <Text style={styles.welcome}>Hoşgeldiniz</Text>
      <Text style={styles.subText}>
        Email veya Google ile giriş yapabilirsiniz!
      </Text>

      <Text style={styles.label}>Email veya Telefon Numarası</Text>
      <TextInput
        placeholder="example@example.com"
        value={textInput1}
        onChangeText={setTextInput1}
        style={styles.input}
        placeholderTextColor="#7F9BFF"
      />

      <Text style={styles.label}>Şifre</Text>

      {/* ŞİFRE GİRİŞİ */}
      <View style={styles.passwordBox}>
        <TextInput
          style={styles.passwordText}
          placeholder="*****"
          placeholderTextColor="#7F9BFF"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons
            name={secureText ? 'eye-off' : 'eye'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.forgot}>Şifremi Unuttum</Text>

      <View style={styles.footer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>Giriş Yap</Text>
        </View>

        <Text style={styles.or}>veya şununla devam et</Text>

        <Image
          source={{
            uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/mmt9q95w_expires_30_days.png',
          }}
          resizeMode="stretch"
          style={styles.googleIcon}
        />

        <Text style={styles.registerPrompt}>
          Hesabın mı yok? <Text style={styles.registerLink}>Kayıt Ol</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 63,
    marginBottom: 34,
    marginLeft: 29,
  },
  headerSpacer: {
    width: 16,
  },
  headerTitle: {
    color: '#4D55CC',
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  welcome: {
    color: '#4D55CC',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 30,
  },
  subText: {
    color: '#070707',
    fontSize: 12,
    marginBottom: 47,
    marginHorizontal: 30,
  },
  label: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 30,
  },
  input: {
    color: '#7F9BFF',
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 30,
    backgroundColor: '#ECF1FF',
    borderRadius: 13,
    paddingVertical: 15,
    paddingLeft: 13,
    paddingRight: 26,
  },
  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF1FF',
    borderRadius: 13,
    paddingVertical: 15, // eşitlik için güncellendi
    paddingHorizontal: 13,
    marginBottom: 9,
    marginHorizontal: 30,
  },
  passwordText: {
    color: '#7F9BFF',
    fontSize: 20,
    flex: 1,
  },
  forgot: {
    color: '#4D55CC',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 36,
    marginLeft: 137,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 204,
    marginHorizontal: 46,
  },
  loginButton: {
    backgroundColor: '#4D55CC',
    borderRadius: 30,
    paddingVertical: 16,
    marginBottom: 16,
    marginHorizontal: 36,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 23,
  },
  or: {
    color: '#070707',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
    marginHorizontal: 3,
  },
  googleIcon: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  registerPrompt: {
    color: '#070707',
    fontSize: 12,
    textAlign: 'center',
  },
  registerLink: {
    color: '#4D55CC',
  },
});
