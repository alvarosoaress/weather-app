import React from 'react';
import { View, Text } from 'react-native';
import SearchInput from 'components/common/searchInput/index,';
import styles from './styles';

export default function Welcome() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Como é inimigo?</Text>
        <Text style={styles.text}>Pesquise os lugar salvos aí vá</Text>
      </View>

      <SearchInput />
    </View>
  );
}
