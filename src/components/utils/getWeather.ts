import axios from 'axios';

// eslint-disable-next-line import/no-unresolved
import { API_KEY, API_URL } from '@env';

export type CurrentWeather = {
  location: {
    name: string;
    region: string;
    country: string;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    vis_km: number;
  };
};

export type SearchResult = {
  id: number;
  name: string;
  region: string;
  country: string;
  url: string;
};

export async function getCurrentWeather(
  city: string,
): Promise<CurrentWeather | null> {
  try {
    const response = await axios.get<CurrentWeather>(
      `${API_URL}/current.json?key=${API_KEY}&q=${city}&lang=pt`,
    );
    return response.data;
  } catch (error) {
    console.log('Error in getCurrentWeather: ', error);
    return null;
  }
}

export async function getSearch(city: string): Promise<SearchResult[] | null> {
  try {
    const response = await axios.get(
      `${API_URL}/search.json?key=${API_KEY}&q=${city}`,
    );
    return response.data;
  } catch (error) {
    console.log('Error in getSearch ', error);
    return null;
  }
}
