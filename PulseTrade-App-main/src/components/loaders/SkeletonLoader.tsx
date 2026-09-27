import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, ViewStyle } from 'react-native';

interface SkeletonLoaderProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: ViewStyle;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  width = '100%', 
  height = 20, 
  borderRadius = 10,
  style 
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, []);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  return (
    <Animated.View
      className="bg-slate-200"
      style={[
        {
          width: typeof width === 'number' ? width : (width as any),
          height: typeof height === 'number' ? height : (height as any),
          borderRadius,
          opacity,
        },
        style,
      ]}
    />
  );
};

export default SkeletonLoader;
