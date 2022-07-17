/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import DestinationSearch from './src/screens/HomeScreen/DestinationSearch';

// import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
