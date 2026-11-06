import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import LearningScreen from '../screens/LearningScreen';
import SimulatorScreen from '../screens/SimulatorScreen';
import RoadmapScreen from '../screens/RoadmapScreen';
import QuizScreen from '../screens/QuizScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();
  
  // Account for system navigation bar / gesture handle
  const bottomMargin = Math.max(insets.bottom, Platform.OS === 'ios' ? 16 : 10);
  const tabHeight = 64;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: bottomMargin,
          left: 14,
          right: 14,
          elevation: 8,
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          height: tabHeight,
          paddingTop: 6,
          paddingBottom: 6,
          borderTopWidth: 0,
          shadowColor: '#1E40FF',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.12,
          shadowRadius: 12,
        },
        tabBarActiveTintColor: '#1E40FF',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 2,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName: any;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Learn') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Simulator') {
            iconName = focused ? 'rocket' : 'rocket-outline';
          } else if (route.name === 'Roadmap') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Quiz') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          return (
            <View 
              style={{
                width: 38,
                height: 28,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: focused ? '#EFF6FF' : 'transparent',
              }}
            >
              <Ionicons name={iconName} size={21} color={color} />
            </View>
          );
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 10,
          marginTop: 1,
          paddingBottom: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Learn" component={LearningScreen} />
      <Tab.Screen name="Simulator" component={SimulatorScreen} />
      <Tab.Screen name="Roadmap" component={RoadmapScreen} />
      <Tab.Screen name="Quiz" component={QuizScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
