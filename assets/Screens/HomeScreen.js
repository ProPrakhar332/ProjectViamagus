import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function HomeScreen() {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'monospace',
          fontSize: 30,
        }}
      >
        HomeScreen
      </Text>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontSize: 30,
        }}
      >
        HomeScreen
      </Text>
      <Text
        style={{
          fontFamily: 'sans-serif-condensed',
          fontSize: 30,
        }}
      >
        HomeScreen
      </Text>
      <Text
        style={{
          fontFamily: 'notoserif',
          fontSize: 30,
        }}
      >
        HomeScreen
      </Text>
      <Text
        style={{
          fontFamily: 'normal',
          fontSize: 30,
        }}
      >
        HomeScreen
      </Text>
      <Text
        style={{
          fontFamily: 'sans-serif-medium',
          fontSize: 30,
        }}
      >
        HomeScreen
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontFamily: 'sans-serif-medium',
    fontSize: 30,
  },
});
