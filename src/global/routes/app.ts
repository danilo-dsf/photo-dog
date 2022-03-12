import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dog } from '../../services/DogsService';

export type AppRoutesParams = {
  HomeScreen: undefined;
  DogPhotoDetailsScreen: {
    dog: Dog;
  };
};

export type HomeScreenRouteProps = NativeStackScreenProps<AppRoutesParams, 'HomeScreen'>;

export type DogPhotoDetailsScreenRouteProps = NativeStackScreenProps<
  AppRoutesParams,
  'DogPhotoDetailsScreen'
>;
