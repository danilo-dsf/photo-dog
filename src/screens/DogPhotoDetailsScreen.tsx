import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { AppHeader } from '../components/AppHeader';
import { SafeAreaView } from '../components/SafeAreaView';
import { DogPhotoDetailsScreenRouteProps } from '../global/routes/app';

interface FileInfo {
  breed: string;
  fileName: string;
  url: string;
}

export const DogPhotoDetailsScreen: React.FC<DogPhotoDetailsScreenRouteProps> = ({
  route,
  navigation,
}) => {
  const [fileInfo, setFileInfo] = useState<FileInfo>({} as FileInfo);

  const handleGoBack = () => {
    navigation.pop();
  };

  useEffect(() => {
    const splitUrl = route.params.dog.uri.split('/');

    const breedsLabelIndex = splitUrl.findIndex((text) => text === 'breeds');

    const breed = splitUrl[breedsLabelIndex + 1];
    const fileName = splitUrl[splitUrl.length - 1];
    const url = route.params.dog.uri;

    setFileInfo({ breed, fileName, url });
  }, [route.params.dog.uri]);

  return (
    <SafeAreaView>
      <AppHeader />

      <View style={{ flex: 1, padding: RFValue(24) }}>
        <Image
          source={{ uri: fileInfo.url }}
          style={{
            width: '100%',
            height: RFPercentage(40),
            borderRadius: RFValue(16),
            borderColor: '#f39c12',
            borderWidth: RFValue(8),
            resizeMode: 'cover',
          }}
        />

        <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: RFValue(32) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: RFValue(8), fontSize: RFValue(16) }}>Breed:</Text>
            <Text
              style={{ fontSize: RFValue(16), fontWeight: 'bold', textTransform: 'capitalize' }}
            >
              {fileInfo.breed}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginRight: RFValue(8), fontSize: RFValue(16) }}>File name:</Text>
            <Text
              style={{ fontSize: RFValue(16), fontWeight: 'bold', textTransform: 'capitalize' }}
            >
              {fileInfo.fileName}
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleGoBack}
            style={{
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#f39c12',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: RFValue(8),
              padding: RFValue(8),
              marginTop: RFValue(16),
            }}
          >
            <Feather name="arrow-left" color="#2c2c2c" size={RFValue(20)} />
            <Text
              style={{
                fontSize: RFValue(16),
                fontWeight: 'bold',
                marginLeft: RFValue(8),
              }}
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
