import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/common/Logo';

const { height } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation<any>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  const navigateToHome = () => {
    navigation.replace('MainTabs');
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigateToHome();
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      onPress={navigateToHome}
      style={{ flex: 1 }}
    >
      <View className="flex-1 bg-white items-center justify-center">
        <LinearGradient
          colors={['#1E40FF', '#7C3AED']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.05,
          }}
        />
        
        <Animated.View 
          style={{ 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }}
          className="items-center"
        >
          <Logo size={100} />
          <View className="mt-6 items-center">
            <Text className="text-4xl font-poppins-bold text-slate-900 tracking-tight">
              ETRM <Text className="text-primary">Master</Text>
            </Text>
            <Text className="text-slate-400 font-poppins-medium text-base mt-2">
              Commodity Trading & Risk Academy
            </Text>
          </View>
        </Animated.View>

        <View className="absolute bottom-16 items-center">
          <Text className="text-slate-300 font-poppins-medium text-xs">
            Empowering Energy Professionals
          </Text>
          <Text className="text-slate-400 font-poppins-medium text-[11px] mt-2">
            Tap anywhere to continue
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SplashScreen;
