import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

interface LogoProps {
  size?: number;
  showText?: boolean;
  textColor?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 40, 
  showText = false, 
  textColor = '#1E293B',
  variant = 'light'
}) => {
  const iconSize = size;
  
  return (
    <View className="flex-row items-center">
      <Svg width={iconSize} height={iconSize} viewBox="0 0 100 100" fill="none">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100" y2="100">
            <Stop offset="0" stopColor="#1E40FF" stopOpacity="1" />
            <Stop offset="1" stopColor="#4F46E5" stopOpacity="1" />
          </LinearGradient>
          <LinearGradient id="accentGrad" x1="0" y1="0" x2="100" y2="100">
            <Stop offset="0" stopColor="#F59E0B" stopOpacity="1" />
            <Stop offset="1" stopColor="#D97706" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        
        {/* Hexagon Background */}
        <Path
          d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 L50 5 Z"
          fill="url(#grad)"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        
        {/* Stylized 'M' as a chart */}
        <Path
          d="M30 65 L40 45 L50 55 L60 35 L70 65"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Sparkle/Energy Icon */}
        <Path
          d="M75 25 L80 20 M75 25 L70 20 M75 25 L80 30 M75 25 L70 30"
          stroke="url(#accentGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </Svg>
      
      {showText && (
        <View className="ml-3">
          <Text 
            className="font-poppins-bold text-xl tracking-tight"
            style={{ color: variant === 'light' ? textColor : '#FFFFFF' }}
          >
            ETRM <Text style={{ color: '#1E40FF' }}>Master</Text>
          </Text>
          <Text 
            className="font-poppins-medium text-[8px] uppercase tracking-[2px]"
            style={{ color: variant === 'light' ? '#94A3B8' : '#CBD5E1', marginTop: -4 }}
          >
            Commodity Trading & Risk
          </Text>
        </View>
      )}
    </View>
  );
};

export default Logo;
