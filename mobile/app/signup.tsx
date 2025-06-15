import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function Signup() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleBirthDateChange = (text: string) => {
    let formatted = text.replace(/[^\d]/g, '');
    if (formatted.length > 2 && formatted.length <= 4) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
    } else if (formatted.length > 4) {
      formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}/${formatted.slice(4, 8)}`;
    }
    setBirthDate(formatted);
  };

  const handlePhoneChange = (text: string) => {
    const filtered = text.replace(/[^\d+]/g, '');
    setPhone(filtered);
  };

  const handleSubmit = async () => {
    if (!fullName || !password || !email || !phone || !birthDate) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    const nameParts = fullName.trim().split(' ');
    const name = nameParts[0];
    const surname = nameParts.slice(1).join(' ') || '';

    const formattedBirthDate = (() => {
      const parts = birthDate.split('/');
      if (parts.length !== 3) return '';
      const [day, month, year] = parts;
      return `${year}-${month}-${day}`;
    })();

    const payload = {
      name,
      surname,
      email,
      phone,
      birthday: formattedBirthDate,
      newPassword: password,
      enabled: true,
    };

    try {
      setLoading(true);
      const apiUrl = process.env.EXPO_PUBLIC_USER_ADD;
      const response = await axios.post(apiUrl!, payload);
      setLoading(false);

      if (response.status === 200) {
        Alert.alert(
          'Kayıt Başarılı!',
          'Giriş yapabilirsiniz.',
          [
            {
              text: 'Giriş Yap',
              onPress: () => router.replace('/login'),
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert('Kayıt Başarısız', 'Sunucudan beklenmeyen bir yanıt alındı.');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Hata', 'Kayıt işlemi sırasında bir hata oluştu.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={20} color="#4D55CC" />
          </TouchableOpacity>
          <Text style={styles.title}>Yeni Hesap</Text>
          <View style={{ width: 20 }} />
        </View>

        <Label text="İsim Soyisim" />
        <Input placeholder="Adınız Soyadınız" value={fullName} onChangeText={setFullName} />

        <Label text="Şifre" />
        <Input
          placeholder="********"
          value={password}
          onChangeText={setPassword}
          secure={secureText}
          icon
          onIconPress={() => setSecureText(!secureText)}
        />

        <Label text="Email" />
        <Input placeholder="example@example.com" value={email} onChangeText={setEmail} />

        <Label text="Telefon Numarası" />
        <Input placeholder="+90 555 555 55 55" value={phone} onChangeText={handlePhoneChange} />

        <Label text="Doğum Tarihi" />
        <Input
          placeholder="GG/AA/YYYY"
          value={birthDate}
          onChangeText={handleBirthDateChange}
        />

        <TouchableOpacity onPress={() => router.push('/PrivacyPolicyScreen')}>
          <Text style={styles.termsText}>
            Devam ederek{' '}
            <Text style={styles.link}>Kullanım Şartlarını ve Gizlilik Politikası’nı</Text> kabul etmiş olursunuz.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>
            Zaten hesabın var mı? <Text style={styles.link}>Giriş Yap</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <Text style={styles.label}>{text}</Text>
);

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  icon?: boolean;
  onIconPress?: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secure,
  icon,
  onIconPress,
}) => (
  <View style={styles.inputWrapper}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#809CFF"
      secureTextEntry={secure}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
    {icon && (
      <TouchableOpacity onPress={onIconPress} style={styles.icon}>
        <Ionicons name={secure ? 'eye-off' : 'eye'} size={20} color="#000" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontFamily: 'League Spartan',
    fontWeight: '600',
    color: '#4D55CC',
    textAlign: 'center',
    flex: 1,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: 'League Spartan',
    color: '#809CFF',
    flex: 1,
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
    color: '#000',
  },
  link: {
    color: '#4D55CC',
    fontWeight: '500',
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
  loginText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'League Spartan',
    marginTop: 12,
  },
});
