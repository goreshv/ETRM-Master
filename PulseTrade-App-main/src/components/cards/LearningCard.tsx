import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface LearningCardProps {
  title: string;
  category: string;
  summary: string;
  onPress: () => void;
  featured?: boolean;
  isCompleted?: boolean;
  authorName?: string;
  isCommunity?: boolean;
}

const LearningCard: React.FC<LearningCardProps> = ({ 
  title, 
  category, 
  summary, 
  onPress,
  featured = false,
  isCompleted = false,
  authorName,
  isCommunity = false,
}) => {
  if (featured) {
    return (
      <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.88}
        className="rounded-24 overflow-hidden shadow-md shadow-primary/25 my-3"
      >
        <LinearGradient
          colors={['#1E40FF', '#6366F1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="p-5"
        >
          <View className="flex-row items-center justify-between mb-2.5">
            <View className="flex-row items-center flex-wrap">
              <View className="bg-white/20 px-2.5 py-0.5 rounded-md mr-1.5">
                <Text className="text-white text-[10px] font-poppins-bold uppercase tracking-wider">{category}</Text>
              </View>
              {isCommunity && (
                <View className="bg-amber-400/90 px-2 py-0.5 rounded-md flex-row items-center">
                  <Ionicons name="people" size={11} color="#0F172A" />
                  <Text className="text-slate-900 text-[9px] font-poppins-bold ml-1">
                    {authorName ? `By ${authorName}` : 'Community'}
                  </Text>
                </View>
              )}
            </View>
            {isCompleted && (
              <View className="bg-emerald-500/90 px-2.5 py-0.5 rounded-full flex-row items-center">
                <Ionicons name="checkmark-circle" size={12} color="white" />
                <Text className="text-white text-[10px] font-poppins-bold ml-1 uppercase tracking-wider">Completed</Text>
              </View>
            )}
          </View>
          <Text className="text-white font-poppins-bold text-lg leading-6 mb-1.5">{title}</Text>
          <Text className="text-white/80 font-poppins-medium text-xs leading-5 mb-3" numberOfLines={2}>{summary}</Text>
          <View className="flex-row items-center">
            <Text className="text-white font-poppins-semibold text-xs mr-1.5">
              {isCompleted ? 'Review Lesson' : 'Start Learning'}
            </Text>
            <Ionicons name="arrow-forward" size={14} color="white" />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.75}
      className={`bg-white rounded-2xl p-4 mb-3 shadow-sm border ${
        isCompleted ? 'border-emerald-200 bg-emerald-50/15' : 'border-slate-100'
      } flex-row items-center`}
    >
      <View className={`w-12 h-12 rounded-2xl ${
        isCompleted ? 'bg-emerald-100' : isCommunity ? 'bg-amber-50' : 'bg-blue-50'
      } items-center justify-center mr-3.5 relative`}>
        <Ionicons 
          name={isCompleted ? "checkmark-circle" : isCommunity ? "people" : "book"} 
          size={22} 
          color={isCompleted ? "#059669" : isCommunity ? "#D97706" : "#1E40FF"} 
        />
      </View>
      <View className="flex-1">
        <View className="flex-row items-center justify-between mb-1">
          <View className="flex-row items-center flex-wrap flex-1 mr-1">
            <View className="bg-blue-50 px-2 py-0.5 rounded-md mr-1.5 mb-0.5">
              <Text className="text-primary text-[9px] font-poppins-bold uppercase tracking-wider">{category}</Text>
            </View>
            {isCommunity && (
              <View className="bg-amber-50 px-2 py-0.5 rounded-md flex-row items-center border border-amber-200 mb-0.5">
                <Ionicons name="person" size={10} color="#D97706" />
                <Text className="text-amber-800 text-[9px] font-poppins-bold ml-1" numberOfLines={1}>
                  {authorName ? `By ${authorName}` : 'Community'}
                </Text>
              </View>
            )}
          </View>
          {isCompleted && (
            <View className="flex-row items-center bg-emerald-100/80 px-2 py-0.5 rounded-full">
              <Ionicons name="checkmark" size={11} color="#047857" />
              <Text className="text-emerald-700 text-[9px] font-poppins-bold ml-0.5 uppercase tracking-wider">Done</Text>
            </View>
          )}
        </View>
        <Text className="text-slate-900 font-poppins-bold text-sm leading-5 mb-1" numberOfLines={1}>{title}</Text>
        <Text className="text-slate-500 font-poppins-medium text-[11px] leading-4" numberOfLines={2}>{summary}</Text>
      </View>
      <Ionicons name="chevron-forward" size={16} color="#CBD5E1" style={{ marginLeft: 6 }} />
    </TouchableOpacity>
  );
};

export default LearningCard;
