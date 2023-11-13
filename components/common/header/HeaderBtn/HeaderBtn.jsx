import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

export default function HeaderBtn({ iconUrl, dimension, handlePress }) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} style={styles.btnImg(dimension)} />
    </TouchableOpacity>
  );
}
