import {SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles.js';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="From"
          value={fromText}
          onChangeText={setFromText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Where to"
          value={destinationText}
          onChangeText={setDestinationText}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBYzATrd8Fjbp7e3Lps10FlNkJSrE_WKWk',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
