import {Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles.js';

const HomeSearch = () => {
  return (
    <>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>HomeSearch</Text>
        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text style={{color: '#000'}}>Now</Text>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={16}
            color={'black'}
          />
        </View>
      </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
    </>
  );
};

export default HomeSearch;
