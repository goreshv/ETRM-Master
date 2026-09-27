import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import { View, ActivityIndicator, LogBox } from 'react-native';

// Suppress upstream framework deprecation warning from React Native 0.86
LogBox.ignoreLogs([
  'InteractionManager has been deprecated',
]);

import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'Poppins-Regular': Poppins_400Regular,
          'Poppins-Medium': Poppins_500Medium,
          'Poppins-SemiBold': Poppins_600SemiBold,
          'Poppins-Bold': Poppins_700Bold,
        });
      } catch (e) {
        console.warn('Font load error:', e);
      } finally {
        setAppIsReady(true);
        try {
          await SplashScreen.hideAsync();
        } catch (_) {}
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (_) {}
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <RootNavigator />
      </View>
    </Provider>
  );
}
