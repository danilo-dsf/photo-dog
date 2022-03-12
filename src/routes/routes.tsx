import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AppRoutesParams } from '../global/routes/app';
import { DogPhotoDetailsScreen } from '../screens/DogPhotoDetailsScreen';

const Stack = createNativeStackNavigator<AppRoutesParams>();

export const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DogPhotoDetailsScreen" component={DogPhotoDetailsScreen} />
    </Stack.Navigator>
  );
};
