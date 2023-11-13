import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import icons from '@icons';
import { getCode } from 'iso-3166-1-alpha-2';
import iso from 'iso-3166-1';
import { AnimatePresence, MotiView } from 'moti';
import {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';

export default function LocationResult({ item, handleAdd, index }) {
  const countryCode = iso
    .whereCountry(item.country)
    ?.alpha2?.toLocaleLowerCase();

  const exitSharedValue = useSharedValue(0);

  const exitAnimated = useAnimatedStyle(() => ({
    translateX: exitSharedValue.value,
  }));

  return (
    <AnimatePresence>
      <MotiView
        layout={Layout.stiffness()}
        from={{
          opacity: 0,
          translateY: 100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{ delay: 150 * index + 50 }}
        animatedProps={exitAnimated}
        style={styles.container}
      >
        <View style={styles.containerInfo}>
          <Text style={styles.textTitle}>{item?.name}</Text>
          <Text style={styles.text}>{item?.region}</Text>
          <Text style={styles.text}>
            {item?.country}{' '}
            <Image
              style={{ width: 15, height: 15 }}
              source={{
                uri: `https://flagcdn.com/64x48/${countryCode}.png`,
              }}
            />
          </Text>
        </View>

        <TouchableOpacity
          style={styles.containerBtn}
          onPress={() => {
            handleAdd(item?.url, item?.id);
            exitSharedValue.value = withSpring(-1000, {
              velocity: 200,
              mass: 5,
            });
          }}
        >
          <Image source={icons.plus} style={styles.btnImg} />
        </TouchableOpacity>
      </MotiView>
    </AnimatePresence>
  );
}
