import React from 'react';
import { SafeAreaView as RNSACSafeAreaView } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform, StyleSheet, View, ViewProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface SafeAreaViewProps extends ViewProps {
  backgroundColor?: string;
}

const styles = StyleSheet.create({
  android: {
    flex: 1,
    paddingTop: RFValue(16),
  },
  ios: {
    flex: 1,
    paddingTop: getStatusBarHeight() + RFValue(16),
  },
});

export const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  backgroundColor = '#f4d35e',
  ...rest
}) => {
  if (Platform.OS === 'android') {
    return (
      <RNSACSafeAreaView {...rest} style={{ ...styles.android, backgroundColor }}>
        {children}
      </RNSACSafeAreaView>
    );
  }

  return (
    <View {...rest} style={{ ...styles.ios, backgroundColor }}>
      {children}
    </View>
  );
};
