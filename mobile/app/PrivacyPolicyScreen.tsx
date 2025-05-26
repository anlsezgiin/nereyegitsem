import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color={colors.ngcolor} />
      </TouchableOpacity>

      <Text style={styles.title}>Gizlilik Sözleşmesi</Text>
      <Text style={styles.lastUpdate}>Son Güncelleme: 16 Mayıs 2025</Text>

      <Text style={styles.paragraph}>
        Bu gizlilik sözleşmesi, Nereye Gitsem adlı mobil uygulamanın kullanıcılarından topladığı bilgilerin nasıl
        kullanıldığını ve korunduğunu açıklamaktadır.
      </Text>

      <Text style={styles.sectionTitle}>1. Toplanan Bilgiler</Text>
      <Text style={styles.paragraph}>
        Uygulamamız şu tür bilgileri toplayabilir:
        {"\n"}- Cihaz bilgileri (model, işletim sistemi)
        {"\n"}- Kullanıcı hareketleri (uygulama içi gezinme)
        {"\n"}- Konum bilgisi (kullanıcı onay verirse)
        {"\n"}- Geri bildirim ve destek mesajları
      </Text>

      <Text style={styles.sectionTitle}>2. Bilgilerin Kullanımı</Text>
      <Text style={styles.paragraph}>
        Toplanan veriler şu amaçlarla kullanılabilir:
        {"\n"}- Hizmet kalitesini artırmak
        {"\n"}- Hata ve sorunları tespit etmek
        {"\n"}- Kullanıcı deneyimini iyileştirmek
        {"\n"}- Gerekli durumlarda kullanıcı ile iletişime geçmek
      </Text>

      <Text style={styles.sectionTitle}>3. Bilgi Paylaşımı</Text>
      <Text style={styles.paragraph}>
        Kullanıcı bilgileri üçüncü kişilerle paylaşılmaz, satılmaz veya kiralanmaz. Yasal zorunluluklar dışında bilgiler gizli tutulur.
      </Text>

      <Text style={styles.sectionTitle}>4. Güvenlik</Text>
      <Text style={styles.paragraph}>
        Kullanıcı bilgileri güvenli sunucularda saklanır ve yalnızca yetkili kişiler tarafından erişilebilir.
      </Text>

      <Text style={styles.sectionTitle}>5. Çocukların Gizliliği</Text>
      <Text style={styles.paragraph}>
        Uygulama 13 yaş altı çocuklara yönelik değildir. Bu yaş grubundan bilgi toplandığı tespit edilirse, bilgiler derhal silinir.
      </Text>

      <Text style={styles.sectionTitle}>6. Değişiklikler</Text>
      <Text style={styles.paragraph}>
        Bu sözleşme zaman zaman güncellenebilir. Değişiklikler uygulama üzerinden duyurulur.
      </Text>

      <Text style={styles.sectionTitle}>7. İletişim</Text>
      <Text style={styles.paragraph}>
        Her türlü soru ve geri bildirim için iletişim bölümü daha sonra güncellenecektir.
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    backgroundColor: colors.white,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
    padding: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    color: colors.ngcolor,
    marginBottom: 8,
    textAlign: 'center',
  },
  lastUpdate: {
    color: colors.ngcolor,
    fontSize: 13,
    fontFamily: fonts.medium,
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.ngcolor,
    marginTop: 24,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.black,
    marginBottom: 16,
    lineHeight: 22,
  },
});