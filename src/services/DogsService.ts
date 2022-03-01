import uuid from 'react-native-uuid';

import { api } from './api';

export interface Dog {
  id: string;
  uri: string;
}

export async function getRandomDogs(): Promise<Dog[]> {
  const response = await api.get('breeds/image/random/40');

  const dogs: Dog[] = response.data.message?.map((url: string) => ({
    id: uuid.v4(),
    uri: url,
  }));

  return dogs;
}
