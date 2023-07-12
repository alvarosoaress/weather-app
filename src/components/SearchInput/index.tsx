/* eslint-disable react/prop-types */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as S from './styles';

type Props = {
  placeholder?: string;
  isLoading: boolean;
  onChange: (text: string) => void;
  onSubmit: (text: string) => void;
  onPress: () => void;
};

export default function SearchInput({
  placeholder,
  isLoading,
  onChange,
  onSubmit,
  onPress,
}: Props): JSX.Element {
  const { COLORS } = useTheme();
  return (
    <S.Container>
      <S.Wrapper>
        <S.SearchInput
          placeholder={placeholder}
          onChangeText={(text) => {
            onChange(text);
          }}
          returnKeyType="search"
          onSubmitEditing={(event) => {
            onSubmit(event.nativeEvent.text);
          }}
          editable={!isLoading}
        />
      </S.Wrapper>

      <S.SearchBtn
        isLoading={isLoading}
        onPress={() => {
          onPress();
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size={25} color="white" />
        ) : (
          <Ionicons name="search" size={25} color={COLORS.bgContrast} />
        )}
      </S.SearchBtn>
    </S.Container>
  );
}
