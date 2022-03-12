import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import LogoDark from '../assets/logo-dark.png';
import LogoLight from '../assets/logo-light.png';

interface AppHeaderProps {
  logoStyle?: 'light' | 'dark';
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: RFPercentage(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export const AppHeader: React.FC<AppHeaderProps> = ({ logoStyle = 'dark' }) => {
  return (
    <View style={styles.container}>
      <Image source={logoStyle === 'dark' ? LogoDark : LogoLight} style={styles.logo} />
    </View>
  );
};
