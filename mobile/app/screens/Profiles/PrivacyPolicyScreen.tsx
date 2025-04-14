// app/screens/Profile/PrivacyPolicyScreen.tsx

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import colors from '../../../config/colors';
import fonts from '../../../config/fonts';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Gizlilik Sözleşmesi</Text>
      <Text style={styles.lastUpdate}>Last Update: 14/08/2024</Text>

      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
        tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a scelerisque neque,
        sed accumsan metus.
      </Text>

      <Text style={styles.paragraph}>
        Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus at,
        volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel neque
        auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque
        tincidunt porta.
      </Text>

      <Text style={styles.sectionTitle}>Terms & Conditions</Text>

      <Text style={styles.listItem}>
        1. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum,
        nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam
        lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
        tellus ac turpis.
      </Text>

      <Text style={styles.listItem}>
        2. Ut lacinia justo sit amet lorem sodales accumsan. Donec condimentum, nunc at rhoncus faucibus, ex nisi
        laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis
        laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus.
      </Text>

      <Text style={styles.listItem}>
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt
        tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.
      </Text>

      <Text style={styles.listItem}>
        4. Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus at,
        volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel neque
        auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque.
      </Text>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.white,
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
  paragraph: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.black,
    marginBottom: 16,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.ngcolor,
    marginTop: 24,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.black,
    marginBottom: 16,
    lineHeight: 22,
  },
});
