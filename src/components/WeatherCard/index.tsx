import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as CS from '@/components/common/styles';
import * as S from './styles';
import { getCurrentWeather, type CurrentWeather } from '../utils/getWeather';

export default function WeatherCard({ city }: { city: string }): JSX.Element {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);

  useEffect(() => {
    async function getWeather(): Promise<void> {
      try {
        const weatherData = await getCurrentWeather(city);
        setWeather(weatherData);
      } catch (error) {
        console.log('Erro useEffect getWeather in WeatherCard');
      }
    }

    void getWeather();
  }, [city]);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.ContainerLocation>
          <CS.Title>{weather?.location.name}</CS.Title>
          <CS.Text>
            {weather?.location.region} - {weather?.location.country}
          </CS.Text>
        </S.ContainerLocation>

        <View>
          <CS.Text>
            {String(weather?.location.localtime)
              .slice(0, 10)
              .replaceAll('-', '/')}
            {'\n'}
            {String(weather?.location.localtime).slice(-5)}
          </CS.Text>
        </View>

        <S.ContainerSituation>
          <CS.Title>{weather?.current.condition.text}</CS.Title>
          <CS.Text>Umidade: {weather?.current.humidity}%</CS.Text>
          <CS.Text>Vento: {weather?.current.wind_kph} km/h</CS.Text>
        </S.ContainerSituation>
      </S.ContainerInfo>

      <S.ContainerTemp>
        <S.ConditionImage
          source={{
            uri: `https:${weather?.current.condition.icon ?? 'none'}`,
          }}
        />
        <S.TitleTemp>{weather?.current.temp_c} °C</S.TitleTemp>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <CS.Text>{weather?.current.feelslike_c} °C</CS.Text>
      </S.ContainerTemp>
    </S.Container>
  );
}
