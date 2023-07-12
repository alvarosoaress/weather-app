import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { BtnContainer } from './styles';

type Props = {
  iconUrl: any;
  navigation?: () => void;
};

export default function HeaderBtn({ iconUrl, navigation }: Props): JSX.Element {
  const { COLORS } = useTheme();

  return (
    <BtnContainer onPress={navigation}>
      <Ionicons name={iconUrl} size={32} color={COLORS.primary} />
    </BtnContainer>
  );
}
