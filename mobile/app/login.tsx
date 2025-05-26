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
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);
  const [textInput1, setTextInput1] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // MOCK API GÜNCELLENECEK!!!
  const fakeLoginApi = async () => {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ status: 200 }), 300)
    );
  };

  const handleLogin = async () => {
    if (!textInput1 || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    setLoading(true);

    const response: any = await fakeLoginApi();
    setLoading(false);

    if (response.status === 200) {
      router.push('/home');
    } else {
      Alert.alert('Giriş Başarısız', 'Lütfen bilgilerinizi kontrol edin.');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google login tıklandı');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Ionicons name="chevron-back" size={24} color="#4D55CC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Giriş Yap</Text>
        <View style={{ width: 24 }} />
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
      <View style={styles.passwordBox}>
        <TextInput
          style={styles.passwordText}
          placeholder="********"
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

      <TouchableOpacity onPress={() => router.push('/SetPasswordScreen')}>
        <Text style={styles.forgot}>Şifremi Unuttum</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.loginText}>Giriş Yap</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.or}>veya şununla devam et</Text>

        <TouchableOpacity onPress={handleGoogleLogin}>
          <Image
            source={{
              uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/mmt9q95w_expires_30_days.png',
            }}
            resizeMode="stretch"
            style={styles.googleIcon}
          />
        </TouchableOpacity>

        <View style={styles.registerRow}>
          <Text style={styles.registerPrompt}>Hesabın mı yok? </Text>
          <Text
            style={styles.registerLink}
            onPress={() => router.push('/signup')}
          >
            Kayıt Ol
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 63,
    marginBottom: 34,
    marginHorizontal: 29,
  },
  headerTitle: {
    color: '#4D55CC',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcome: {
    color: '#4D55CC',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 30,
  },
  subText: {
    color: '#070707',
    fontSize: 12,
    marginBottom: 40,
    marginHorizontal: 30,
  },
  label: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 30,
  },
  input: {
    color: '#7F9BFF',
    fontSize: 16,
    height: 50,
    marginBottom: 20,
    marginHorizontal: 30,
    backgroundColor: '#ECF1FF',
    borderRadius: 13,
    paddingHorizontal: 13,
  },
  passwordBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF1FF',
    borderRadius: 13,
    paddingHorizontal: 13,
    height: 50,
    marginBottom: 10,
    marginHorizontal: 30,
  },
  passwordText: {
    color: '#7F9BFF',
    fontSize: 16,
    flex: 1,
  },
  forgot: {
    color: '#4D55CC',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 30,
    marginBottom: 36,
  },
  footer: {
    alignItems: 'center',
    marginHorizontal: 46,
  },
  loginButton: {
    backgroundColor: '#4D55CC',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
    minWidth: 180,
    alignItems: 'center',
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  or: {
    color: '#070707',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  googleIcon: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerPrompt: {
    color: '#070707',
    fontSize: 12,
  },
  registerLink: {
    color: '#4D55CC',
    fontSize: 12,
  },
});
