/* eslint-disable global-require */
import { Stack, useRouter } from 'expo-router';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import icons from '@icons';
import * as SplashScreen from 'expo-splash-screen';
import HeaderBtn from 'components/common/header/HeaderBtn/HeaderBtn';
import { COLORS, FONT } from '@theme';
import { StyleSheet } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    SFPRODisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    SFPRODisplayRegular: require('../assets/fonts/SF-Pro-Display-Regular.otf'),
    SFPRODisplayMedium: require('../assets/fonts/SF-Pro-Display-Medium.otf'),

    SFPROTextBold: require('../assets/fonts/SF-Pro-Text-Bold.otf'),
    SFPROTextRegular: require('../assets/fonts/SF-Pro-Text-Regular.otf'),
    SFPROTextMedium: require('../assets/fonts/SF-Pro-Text-Medium.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <Stack
        onLayout={onLayoutRootView}
        screenOptions={{
          headerStyle: styles.header,
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
          headerTintColor: COLORS.lightWhite,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'CalvoTempo',
            headerLeft: () => (
              <HeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <HeaderBtn
                iconUrl={icons.plus}
                dimension="60%"
                handlePress={() => {
                  router.push('add');
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
        />
      </Stack>
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.gray,
  },
  title: {
    fontFamily: FONT.boldDisplay,
    color: COLORS.text,
  },
});
