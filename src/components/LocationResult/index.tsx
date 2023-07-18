import React from 'react';
import { Image, type ViewProps } from 'react-native';
import iso from 'iso-3166-1';
import { AnimatePresence } from 'moti';
import {
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { Text } from '@/components/common/styles';
import * as S from './styles';
import { type SearchResult } from '../utils/getWeather';

type ElementProps = {
  item: SearchResult;
  index: number;
  handleAdd: (url: string) => void;
};

export default function LocationResult({
  item,
  index,
  handleAdd,
}: ElementProps): JSX.Element {
  const countryCode = iso
    .whereCountry(item.country)
    ?.alpha2?.toLocaleLowerCase();

  const exitSharedValue = useSharedValue(0);

  const animatedStyles: Partial<ViewProps> = {
    style: {
      transform: [{ translateX: exitSharedValue.value }],
    },
  };

  const exitAnimated: Partial<ViewProps> = useAnimatedStyle(
    () => animatedStyles,
  );

  const { COLORS } = useTheme();

  return (
    <AnimatePresence>
      <S.Container
        layout={Layout.stiffness(1)}
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
      >
        <S.Info>
          <S.LocalTitle>{item?.name}</S.LocalTitle>
          <Text>{item?.region}</Text>
          <Text>
            {item?.country}{' '}
            <Image
              style={{ width: 15, height: 15 }}
              source={{
                uri: `https://flagcdn.com/64x48/${countryCode ?? ''}.png`,
              }}
            />
          </Text>
        </S.Info>

        <S.ContainerBtn
          onPress={() => {
            handleAdd(item?.url);
            // handleAdd(item?.url, item?.id);
            exitSharedValue.value = withSpring(-1000, {
              velocity: 200,
              mass: 5,
            });
          }}
        >
          <Ionicons name="add" size={32} color={COLORS.primary} />
        </S.ContainerBtn>
      </S.Container>
    </AnimatePresence>
  );
}
