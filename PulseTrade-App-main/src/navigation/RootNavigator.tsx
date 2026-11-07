import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LearningDetailScreen from '../screens/LearningDetailScreen';
import RoadmapScreen from '../screens/RoadmapScreen';
import VideoHubScreen from '../screens/VideoHubScreen';

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
        <Stack.Screen name="Roadmap" component={RoadmapScreen} />
        <Stack.Screen name="VideoHub" component={VideoHubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
