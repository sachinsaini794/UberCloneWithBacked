import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#fff',
  },
});
