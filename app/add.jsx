import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import SearchLocation from 'components/pages/add/SearchLocation';
import { COLORS, FONT, SIZES } from '../constants/theme';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: SIZES.medium, gap: SIZES.medium }}>
        <SearchLocation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.gray,
  },
  title: {
    fontFamily: FONT.boldDisplay,
    color: COLORS.text,
  },
});
