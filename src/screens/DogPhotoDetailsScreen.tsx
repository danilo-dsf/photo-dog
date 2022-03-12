import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { AppHeader } from '../components/AppHeader';
import { SafeAreaView } from '../components/SafeAreaView';
import { DogPhotoDetailsScreenRouteProps } from '../global/routes/app';

interface FileInfo {
  breed: string;
  fileName: string;
}

export const DogPhotoDetailsScreen: React.FC<
  DogPhotoDetailsScreenRouteProps
> = ({ route }) => {
  const [fileInfo, setFileInfo] = useState<FileInfo>({} as FileInfo);

  useEffect(() => {
    const splitUrl = route.params.dog.uri.split('/');

    const breedsLabelIndex = splitUrl.findIndex(text => text === 'breeds');

    const breed = splitUrl[breedsLabelIndex + 1];
    const fileName = splitUrl[splitUrl.length - 1];

    setFileInfo({ breed, fileName });
  }, [route.params.dog.uri]);

  return (
    <SafeAreaView>
      <AppHeader />
      <Text>Hello world!</Text>
      <Text>{fileInfo.breed}</Text>
      <Text>{fileInfo.fileName}</Text>
    </SafeAreaView>
  );
};
