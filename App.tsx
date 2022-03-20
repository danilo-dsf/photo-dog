import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f4d35e" style="dark" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
