import 'react-native-gesture-handler';
import React, { useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import { View, LogBox } from 'react-native';

// Suppress upstream framework deprecation warning from React Native 0.86
LogBox.ignoreLogs([
  'InteractionManager has been deprecated',
]);

import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  useEffect(() => {
    // Load fonts asynchronously in background without freezing app startup
    Font.loadAsync({
      'Poppins-Regular': Poppins_400Regular,
      'Poppins-Medium': Poppins_500Medium,
      'Poppins-SemiBold': Poppins_600SemiBold,
      'Poppins-Bold': Poppins_700Bold,
    }).catch(e => console.warn('Font load error:', e));
  }, []);

  // Dismiss native splash screen the exact moment the root view lays out
  const onLayoutRootView = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (_) {}
  }, []);

  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} onLayout={onLayoutRootView}>
        <RootNavigator />
      </View>
    </Provider>
  );
}
