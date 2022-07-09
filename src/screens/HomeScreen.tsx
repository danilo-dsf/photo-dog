import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AppHeader } from '../components/AppHeader';
import { DogImage } from '../components/DogImage';
import { SafeAreaView } from '../components/SafeAreaView';
import { HomeScreenRouteProps } from '../global/routes/app';
import { Dog, getRandomDogs } from '../services/DogsService';

const renderListFooterComponent = (isLoading: boolean) => {
  if (isLoading) {
    return (
      <View
        style={{
          padding: RFValue(24),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="small" color="black" />
        <Text style={{ marginLeft: RFValue(8) }}>Carregando mais...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        padding: RFValue(24),
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Fim da linha!</Text>
      <Text>Você chegou ao fim da lista</Text>
    </View>
  );
};

export const HomeScreen: React.FC<HomeScreenRouteProps> = ({ navigation }) => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenDogDetails = (dog: Dog) => {
    navigation.navigate('DogPhotoDetailsScreen', { dog });
  };

  const handleLoadMoreItems = async () => {
    if (dogs.length >= 160) {
      return;
    }

    setIsLoading(true);

    const downloadedDogs = await getRandomDogs();

    setDogs((prevState) => [...prevState, ...downloadedDogs]);

    setIsLoading(false);
  };

  useEffect(() => {
    async function downloadDogs() {
      setIsLoading(true);

      const downloadedDogs = await getRandomDogs();

      setDogs(downloadedDogs);

      setIsLoading(false);
    }

    downloadDogs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4d35e' }}>
      <AppHeader logoStyle="dark" />

      <FlatList
        data={dogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DogImage dog={item} onPress={() => handleOpenDogDetails(item)} />}
        numColumns={4}
        ListFooterComponent={() => renderListFooterComponent(isLoading)}
        onEndReached={handleLoadMoreItems}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};
