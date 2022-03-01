import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';

import * as DogsService from './src/services/DogsService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '25%',
    height: 128,
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
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={dogs}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{ width: widthQuarter, height: widthQuarter }}
          />
        )}
        keyExtractor={({ id }) => id}
        numColumns={4}
      />
    </SafeAreaView>
  );
}
