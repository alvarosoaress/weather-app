/* eslint-disable global-require */
import React from 'react';
import {
  type NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { useNavigation, StackActions } from '@react-navigation/native';
import HeaderBtn from '@/components/HeaderBtn';
import { useTheme } from 'styled-components/native';
import Home from '../Home';
import Add from '../Add';

const Stack = createNativeStackNavigator();

// Tipo usado para definir os argumentos passados entre rotas
type StackNavigation = {
  home?: undefined;
  add?: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default function Routes(): JSX.Element {
  const { COLORS, FONT } = useTheme();

  const navigation: StackTypes = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.gray },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: FONT.boldDisplay, color: COLORS.text },
        headerTintColor: COLORS.bgContrast,
      }}
    >
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'CalvoTempo',
          headerLeft: () => <HeaderBtn iconUrl="menu-outline" />,
          headerRight: () => (
            <HeaderBtn
              iconUrl="add"
              navigation={() => {
                navigation.dispatch(StackActions.push('add'));
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="add"
        options={{
          title: 'Adicionar novo local',
        }}
        component={Add}
      />
    </Stack.Navigator>
  );
}
