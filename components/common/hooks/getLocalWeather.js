import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { API_KEY, API_URL } from '@env';

export async function getCurrentWeather({ city }) {
  try {
    const response = await axios.get(
      `${API_URL}/current.json?key=${API_KEY}&q=${city}&lang=pt`,
    );
    return response.data;
  } catch (error) {
    console.log(new Error`Error in getCurrentWeather: ${error}`());
    return null;
  }
}

export async function getForecastWeather({ city }) {
  try {
    const response = await axios.get(
      `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&aqi=no&alerts=no&lang=pt`,
    );
    return response.data;
  } catch (error) {
    console.log(new Error`Error in getForecastWeather: ${error}`());
    return null;
  }
}

export async function getSearch(city) {
  try {
    const response = await axios.get(
      `${API_URL}/search.json?key=${API_KEY}&q=${city}`,
    );
    return response.data;
  } catch (error) {
    console.log(new Error`Error in getSearch: ${error}`());
    return null;
  }
}
