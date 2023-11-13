/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getCurrentWeather } from '@hooks';
import styles from './styles';

export default function WeatherCard(city) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const weatherData = await getCurrentWeather(city);
        setWeather(weatherData);
      } catch (error) {
        console.log(`Error in getWeather: ${error}`);
      }
    }

    getWeather();
  }, [city]);

  if (!weather) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <View style={styles.containerLocation}>
          <Text style={styles.textTitle}>{weather?.location.name}</Text>
          <Text style={styles.text}>
            {weather?.location.region} - {weather?.location.country}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>
            {String(weather?.location.localtime)
              .slice(0, 10)
              .replaceAll('-', '/')}
            {'\n'}
            {String(weather?.location.localtime).slice(-5)}
          </Text>
        </View>

        <View style={styles.containerSituation}>
          <Text style={styles.textTitle}>
            {weather?.current.condition.text}
          </Text>
          <Text style={styles.text}>
            Humidade: {weather?.current.humidity}%
          </Text>
          <Text style={styles.text}>
            Vento: {weather?.current.wind_kph} km/h
          </Text>
        </View>
      </View>

      <View style={styles.containerTemp}>
        <Image
          style={styles.conditionImage}
          source={{ uri: `https:${weather?.current.condition.icon}` }}
        />
        <Text style={styles.textTitleTemp}>{weather?.current.temp_c} °C</Text>
        <Text style={styles.textTitle}>{weather?.current.feelslike_c} °C</Text>
      </View>
    </View>
  );
}
