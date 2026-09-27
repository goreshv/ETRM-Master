import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface LearningCardProps {
  title: string;
  category: string;
  summary: string;
  onPress: () => void;
  featured?: boolean;
}

const LearningCard: React.FC<LearningCardProps> = ({ 
  title, 
  category, 
  summary, 
  onPress,
  featured = false
}) => {
  if (featured) {
    return (
      <TouchableOpacity 
        onPress={onPress}
        className="rounded-20 overflow-hidden shadow-lg shadow-primary/30 my-4"
      >
        <LinearGradient
          colors={['#1E40FF', '#7C3AED']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="p-6"
        >
          <View className="bg-white/20 self-start px-2 py-1 rounded-md mb-3">
            <Text className="text-white text-[10px] font-poppins-bold uppercase">{category}</Text>
          </View>
          <Text className="text-white font-poppins-bold text-xl leading-7 mb-2">{title}</Text>
          <Text className="text-white/80 font-poppins-medium text-sm leading-5 mb-4">{summary}</Text>
          <View className="flex-row items-center">
            <Text className="text-white font-poppins-semibold mr-2">Start Learning</Text>
            <Ionicons name="arrow-forward" size={16} color="white" />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-card rounded-20 p-4 mb-4 shadow-sm shadow-slate-200 border border-slate-100 flex-row items-center"
    >
      <View className="w-16 h-16 rounded-xl bg-blue-50 items-center justify-center mr-4">
        <Ionicons name="book" size={24} color="#1E40FF" />
      </View>
      <View className="flex-1">
        <View className="bg-blue-100 self-start px-2 py-0.5 rounded-md mb-1.5">
          <Text className="text-primary text-[10px] font-poppins-bold uppercase">{category}</Text>
        </View>
        <Text className="text-slate-900 font-poppins-bold text-base leading-5 mb-1">{title}</Text>
        <Text className="text-slate-400 font-poppins-medium text-xs leading-4" numberOfLines={2}>{summary}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LearningCard;
