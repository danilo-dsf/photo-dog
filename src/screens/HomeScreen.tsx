import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { DogImage } from '../components/DogImage';
import { SafeAreaView } from '../components/SafeAreaView';
import { HomeScreenRouteProps } from '../global/routes/app';
import { Dog, getRandomDogs } from '../services/DogsService';

export const HomeScreen: React.FC<HomeScreenRouteProps> = ({ navigation }) => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  const handleOpenDogDetails = (dog: Dog) => {
    navigation.navigate('DogPhotoDetailsScreen', { dog });
  };

  useEffect(() => {
    async function downloadDogs() {
      const downloadedDogs = await getRandomDogs();

      setDogs(downloadedDogs);
    }

    downloadDogs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4d35e' }}>
      <AppHeader logoStyle="dark" />

      <FlatList
        data={dogs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <DogImage dog={item} onPress={() => handleOpenDogDetails(item)} />
        )}
        numColumns={4}
      />
    </SafeAreaView>
  );
};
