import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import SearchInput from '@/components/SearchInput';
import { useTheme } from 'styled-components';
import WeatherCard from '@/components/WeatherCard';
import { useGetCities } from '@/database';
import { type SearchResult } from '@/components/utils/getWeather';
import * as S from './styles';

export default function Home(): JSX.Element {
  const { SIZES } = useTheme();
  const [data, setData] = useState<SearchResult[] | null>([]);

  useGetCities(setData);
  //   console.log('->>> ', data);

  //   const data = ['salvador-urbina-chiapas-mexico'];

  if (data != null && data?.length >= 0) {
    data.forEach((item) => {
      console.log(item.url);
    });
  }

  return (
    <S.Container>
      <S.Wrapper>
        <FlatList
          //  ListHeaderComponent={<SearchInput onChange={() => ()} onPress={() => ()} onSubmit={() => ()} isLoading={false} placeholder='Como é inimigo?'/>}
          ListHeaderComponentStyle={{ marginBottom: SIZES.medium }}
          data={data}
          renderItem={({ item }) => <WeatherCard city={item.url} />}
          showsVerticalScrollIndicator={false}
          //   keyExtractor={(city) => }
          fadingEdgeLength={50}
          //  refreshControl={}
        />
      </S.Wrapper>
    </S.Container>
  );
}
