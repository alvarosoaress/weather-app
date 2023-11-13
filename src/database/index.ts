import { type SearchResult } from '@/components/utils/getWeather';
import { type DataSnapshot, get, ref, set } from 'firebase/database';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import db from '../../firebaseConfig';

// TODO Verificar se val() pode ser nulo
type getCitiesType = {
  val: () => Record<number, SearchResult>;
} & Omit<DataSnapshot, 'val'>;

export async function saveCity(city: SearchResult): Promise<void> {
  try {
    await set(ref(db, `cities/${city.id}`), {
      url: city.url,
      name: city.name,
      country: city.country,
      region: city.region,
    });
  } catch (error: unknown) {
    console.log(error);
  }
}

export async function getCities(): Promise<SearchResult[] | null> {
  try {
    const snapshot: getCitiesType = await get(ref(db, 'cities/'));
    if (snapshot.exists() && snapshot.val() !== null) {
      console.log(snapshot.val());
      const ja = snapshot.val();
      const result = Object.values(ja);
      return result;
    }
    console.log('No data available');
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function useGetCities(
  setCidades: React.Dispatch<React.SetStateAction<SearchResult[] | null>>,
): void {
  useFocusEffect(
    useCallback(() => {
      async function fetchCities(): Promise<void> {
        try {
          setCidades(await getCities());
        } catch (error) {
          console.log('Error in useGetCities ', error);
        }
      }

      void fetchCities();
    }, [setCidades]),
  );
}
