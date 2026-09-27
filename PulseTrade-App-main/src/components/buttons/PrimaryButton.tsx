import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  loading 
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={loading}
      className="rounded-20 overflow-hidden shadow-lg shadow-primary/30"
      style={style}
    >
      <LinearGradient
        colors={['#1E40FF', '#7C3AED']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="py-4 px-8 items-center justify-center"
      >
        <Text 
          className="text-white text-lg font-poppins-semibold" 
          style={textStyle}
        >
          {loading ? 'Loading...' : title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
