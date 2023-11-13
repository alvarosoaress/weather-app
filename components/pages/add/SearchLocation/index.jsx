/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SearchInput from 'components/common/searchInput/index,';
import { getSearch } from '@hooks';
import LocationResult from 'components/pages/add/LocationResult';
import DatabaseConnection from 'database/db-connection';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useFocusEffect } from 'expo-router';

export default function SearchLocation() {
  const [search, setSearch] = useState(null);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState([]);

  const db = DatabaseConnection.getConnection();

  useFocusEffect(
    useCallback(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM city',
          null,
          (txObj, resultSet) => setData([...resultSet.rows._array]),
          (txObj, error) => console.log(error.message),
        );
      });
    }, []),
  );

  function addCity(cityUrl, id) {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO city (city_id, city_url) VALUES (?, ?)',
        [id, cityUrl],
        (_, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            setTimeout(() => {
              const newResults = result.filter((obj) => obj.id !== id);
              setResult([...newResults]);
            }, 200);
            Toast.show({
              type: 'success',
              text1: 'Cidade adicionada !',
              visibilityTime: 1500,
            });
          } else
            Toast.show({
              type: 'error',
              text1: 'Erro ao adicionar cidade !',
              visibilityTime: 1500,
            });
        },
        (_, error) => console.log(error),
      );
    });
  }

  function handleSearch() {
    setIsLoading(true);
    getSearch(search)
      .then((res) => {
        const filteredResult = res.filter(
          (item) => !data.some((city) => city.city_id === item.id),
        );
        setResult(filteredResult);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchInput
        placeholder="Pesquisar local..."
        onChange={(e) => {
          setSearch(e);
        }}
        onPress={() => handleSearch()}
        onSubmit={() => handleSearch()}
        isLoading={isLoading}
      />

      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={result}
        renderItem={({ item, index }) => (
          <LocationResult item={item} handleAdd={addCity} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        fadingEdgeLength={50}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 30,
  },
});
