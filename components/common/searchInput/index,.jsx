/* eslint-disable react/prop-types */
import React from 'react';
import { View, TextInput, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '@icons';
import styles from './styles';

export default function SearchInput({
  placeholder,
  onChange,
  onSubmit,
  onPress,
  isLoading,
}) {
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder={placeholder}
            onChangeText={(text) => onChange(text)}
            returnKeyType="search"
            onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
            editable={!isLoading}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn(isLoading)}
          onPress={() => onPress()}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Image style={styles.searchBtnImage} source={icons.search} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
