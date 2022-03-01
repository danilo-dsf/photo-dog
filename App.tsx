import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
  Text,
} from 'react-native';
import { DogCard } from './src/components/DogCard';

import * as DogsService from './src/services/DogsService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [loading, setLoading] = useState(false);
  const [dogs, setDogs] = useState<DogsService.Dog[]>([]);

  const { width } = useWindowDimensions();
  const widthQuarter = width * 0.25;

  useEffect(() => {
    async function getInitialImages() {
      setLoading(true);

      const downloadedDogs = await DogsService.getRandomDogs();

      setDogs(downloadedDogs);

      setLoading(false);
    }

    getInitialImages();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color="#000" size={32} />
        <Text>Carregando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={dogs}
        renderItem={({ item }) => (
          <DogCard dog={item} size={widthQuarter - 8} />
        )}
        keyExtractor={({ id }) => id}
        numColumns={4}
      />
    </SafeAreaView>
  );
}
