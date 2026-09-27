import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LearningDetailScreen from '../screens/LearningDetailScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#F8FAFC' },
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        <Stack.Screen name="LearningDetail" component={LearningDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
