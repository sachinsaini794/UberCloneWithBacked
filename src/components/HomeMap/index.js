import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <Text>HomeMap</Text>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#a0abff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
