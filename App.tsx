/* eslint-disable global-require */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@/screens/Routes';
import {
  Inter_300Light as interLight,
  Inter_400Regular as interRegular,
  Inter_700Bold as interBold,
  useFonts,
} from '@expo-google-fonts/inter';
import {
  Nunito_400Regular as nunitoRegular,
  Nunito_700Bold as nunitoBold,
  Nunito_900Black as nunitoBlack,
} from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator } from 'react-native';
// import { ThemeProvider } from 'styled-components/native';
import { ThemeProvider } from '@/theme/Theme';
import CityContext from '@/database/CityContext';

export default function App(): JSX.Element {
  const { RealmProvider } = CityContext;
  const [fontsLoaded] = useFonts({
    interLight,
    interRegular,
    interBold,
    nunitoRegular,
    nunitoBold,
    nunitoBlack,
    SFPRODisplayRegular: require('./src/assets/fonts/SF-Pro-Display-Regular.otf'),
    SFPRODisplayMedium: require('./src/assets/fonts/SF-Pro-Display-Medium.otf'),
    SFPRODisplayBold: require('./src/assets/fonts/SF-Pro-Display-Bold.otf'),
    SFPROTextRegular: require('./src/assets/fonts/SF-Pro-Text-Regular.otf'),
    SFPROTextMedium: require('./src/assets/fonts/SF-Pro-Text-Medium.otf'),
    SFPROTextBold: require('./src/assets/fonts/SF-Pro-Text-Bold.otf'),
  });

  useEffect(() => {
    async function prepare(): Promise<void> {
      await SplashScreen.preventAutoHideAsync();
    }

    void prepare();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  void SplashScreen.hideAsync();

  return (
    <RealmProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </RealmProvider>
  );
}
