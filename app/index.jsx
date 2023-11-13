/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import Welcome from 'components/pages/index/Welcome';
import WeatherCard from 'components/pages/index/WeatherCard';
import { COLORS, FONT, SIZES } from '../constants/theme';
import DatabaseConnection from '../database/db-connection';

export default function Home() {
  const [data, setData] = useState([]);

  const [refresh, setRefresh] = useState(false);

  const db = DatabaseConnection.getConnection();

  useFocusEffect(
    useCallback(() => {
      // Abrindo transaction com DB
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS city (id INTEGER PRIMARY KEY AUTOINCREMENT, city_url TEXT, city_id INTEGER)',
        );
        // tx.executeSql('DROP TABLE IF EXISTS city', null);
      });

      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM city ORDER BY id DESC',
          null,
          (txObj, result) => setData([...result.rows._array]),
          (txObj, error) => console.log(error.message),
        );
      });

      setRefresh(false);
    }, [refresh]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <FlatList
          ListHeaderComponent={<Welcome />}
          ListHeaderComponentStyle={{ marginBottom: SIZES.medium }}
          data={data}
          renderItem={(city) => <WeatherCard city={city.item.city_url} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(city) => city.id}
          fadingEdgeLength={50}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => setRefresh(true)}
            />
          }
        />
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
