import React from 'react';
import { AppHeader } from '../components/AppHeader';
import { SafeAreaView } from '../components/SafeAreaView';

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4d35e' }}>
      <AppHeader logoStyle="dark" />
    </SafeAreaView>
  );
};
