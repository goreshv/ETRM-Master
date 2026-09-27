import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import LearningScreen from '../screens/LearningScreen';
import SimulatorScreen from '../screens/SimulatorScreen';
import RoadmapScreen from '../screens/RoadmapScreen';
import QuizScreen from '../screens/QuizScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 15,
          right: 15,
          elevation: 5,
          backgroundColor: '#ffffff',
          borderRadius: 25,
          height: 70,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          shadowColor: '#1E40FF',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
        },
        tabBarActiveTintColor: '#1E40FF',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarIcon: ({ focused, color, size }) => {
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
                width: 40,
                height: 34,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                backgroundColor: focused ? '#EFF6FF' : 'transparent',
              }}
            >
              <Ionicons name={iconName} size={22} color={color} />
            </View>
          );
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 10,
          marginTop: -5,
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
