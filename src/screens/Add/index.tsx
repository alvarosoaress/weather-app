import LocationResult from '@/components/LocationResult';
import SearchInput from '@/components/SearchInput';
import { type SearchResult, getSearch } from '@/components/utils/getWeather';
import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import CityContext, { City } from '@/database/CityContext';
import * as S from './styles';

export default function Add(): JSX.Element {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<SearchResult[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [cities, setCities] = useState<CityType>(null);

  function handleSearch(): void {
    setIsLoading(true);
    getSearch(search)
      .then((res) => {
        // const filteredResult = res.filter(
        //   (item) => !data.some((city) => city.city_id === item.id),
        // );
        setResult(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  const { useRealm, useQuery, useObject } = CityContext;

  const realm = useRealm();

  const handleAddCity = useCallback(
    (url: string): void => {
      if (url.length === 0) {
        return;
      }
      realm.write(() => {
        realm.create('City', City.generate(url));
      });
    },
    [realm],
  );

  const cities = useQuery(City);

  console.log('====================================');
  console.log(cities);
  console.log('====================================');

  return (
    <S.Container>
      <S.Wrapper>
        <SearchInput
          placeholder="Pesquisar local..."
          onChange={(e) => {
            setSearch(e);
          }}
          onPress={() => {
            handleSearch();
          }}
          onSubmit={() => {
            handleSearch();
          }}
          isLoading={isLoading}
        />

        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={result}
          renderItem={({ item, index }) => (
            <LocationResult
              item={item}
              index={index}
              handleAdd={handleAddCity}
            />
          )}
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item) => item.id}
          fadingEdgeLength={25}
        />
      </S.Wrapper>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 30,
    gap: 25,
  },
});
