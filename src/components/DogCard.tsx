import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Dog } from '../services/DogsService';

interface DogCardProps {
  dog: Dog;
  size: number;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dogCard: {
    padding: 4,
  },
});

export const DogCard = ({ dog, size }: DogCardProps) => {
  return (
    <TouchableOpacity style={styles.dogCard}>
      <Image source={{ uri: dog.uri }} style={{ width: size, height: size, borderRadius: 8 }} />
    </TouchableOpacity>
  );
};
