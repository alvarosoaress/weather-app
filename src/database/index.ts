import { type SearchResult } from '@/components/utils/getWeather';
import { type DataSnapshot, get, ref, set } from 'firebase/database';
import db from '../../firebaseConfig';

type getCitiesType = {
  val: () => SearchResult[];
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
  let result: SearchResult[] | null = null;
  await get(ref(db, `cities/`))
    // eslint-disable-next-line consistent-return, @typescript-eslint/no-invalid-void-type
    .then((snapshot: getCitiesType): SearchResult[] | void => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        result = snapshot.val();
      } else {
        console.log('No data available');
        result = null;
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return result;
}
