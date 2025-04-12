// app/components/Profile/PasswordInput.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const PasswordInput = ({ value, onChangeText, placeholder }: Props) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />
      <TouchableOpacity onPress={() => setSecure(!secure)}>
        <Ionicons
          name={secure ? 'eye-off-outline' : 'eye-outline'}
          size={20}
          color={colors.gray}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.black,
  },
});
