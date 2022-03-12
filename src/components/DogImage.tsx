import React from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dog } from '../services/DogsService';

interface DogImageProps {
  dog: Dog;
  onPress: () => void;
}

export const DogImage: React.FC<DogImageProps> = ({ dog, onPress }) => {
  const { width: deviceWidth } = useWindowDimensions();
  const deviceWidthQuarter = deviceWidth * 0.25;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: deviceWidthQuarter,
        height: deviceWidthQuarter,
        padding: RFValue(4),
      }}
    >
      <Image
        source={{ uri: dog.uri }}
        style={{
          flex: 1,
          borderRadius: RFValue(4),
          resizeMode: 'cover',
        }}
      />
    </TouchableOpacity>
  );
};
