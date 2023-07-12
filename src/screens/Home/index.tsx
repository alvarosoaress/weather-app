import React from 'react';
import { FlatList } from 'react-native';
import SearchInput from '@/components/SearchInput';
import { useTheme } from 'styled-components';
import WeatherCard from '@/components/WeatherCard';
import * as S from './styles';

export default function Home(): JSX.Element {
  const { SIZES } = useTheme();

  const data = ['salvador-urbina-chiapas-mexico'];

  return (
    <S.Container>
      <S.Wrapper>
        <FlatList
          //  ListHeaderComponent={<SearchInput onChange={() => ()} onPress={() => ()} onSubmit={() => ()} isLoading={false} placeholder='Como é inimigo?'/>}
          ListHeaderComponentStyle={{ marginBottom: SIZES.medium }}
          data={data}
          renderItem={({ item }) => <WeatherCard city={item} />}
          showsVerticalScrollIndicator={false}
          //   keyExtractor={(city) => }
          fadingEdgeLength={50}
          //  refreshControl={}
        />
      </S.Wrapper>
    </S.Container>
  );
}
