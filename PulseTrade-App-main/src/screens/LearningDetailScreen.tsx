import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, Share } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreenContainer from '../components/layout/ScreenContainer';
import { learningService, LearningTopic } from '../services/learningService';

const COMPLETED_TOPICS_KEY = '@completed_topics_list';

const LearningDetailScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { topicId } = route.params;

  const [topic, setTopic] = useState<LearningTopic | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const topicData = await learningService.getTopicDetail(topicId);
        if (topicData) setTopic(topicData);

        // Check completion status
        const completedRaw = await AsyncStorage.getItem(COMPLETED_TOPICS_KEY);
        if (completedRaw) {
          const completedList: string[] = JSON.parse(completedRaw);
          if (completedList.includes(topicId)) {
            setIsCompleted(true);
          }
        }
      } catch (error) {
        console.error('Error fetching topic detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topicId]);

  const handleToggleComplete = async () => {
    try {
      const completedRaw = await AsyncStorage.getItem(COMPLETED_TOPICS_KEY);
      let completedList: string[] = completedRaw ? JSON.parse(completedRaw) : [];

      if (isCompleted) {
        completedList = completedList.filter(id => id !== topicId);
        setIsCompleted(false);
        Alert.alert('Status Updated', 'Module marked as incomplete.');
      } else {
        if (!completedList.includes(topicId)) {
          completedList.push(topicId);
        }
        setIsCompleted(true);
        Alert.alert('Congratulations! 🎉', `You completed "${topic?.title}". Keep up the great work!`);
      }

      await AsyncStorage.setItem(COMPLETED_TOPICS_KEY, JSON.stringify(completedList));
    } catch (e) {
      console.warn('Error updating completion status:', e);
    }
  };

  const handleShare = async () => {
    if (!topic) return;
    try {
      await Share.share({
        title: topic.title,
        message: `ETRM Master: Learning about "${topic.title}" (${topic.category})\n\n${topic.summary}`,
      });
    } catch (error) {
      console.warn('Share error:', error);
    }
  };

  if (loading || !topic) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#1E40FF" />
      </View>
    );
  }

  return (
    <ScreenContainer scrollable={true}>
      <View className="flex-row items-center justify-between mt-4 mb-6">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="w-10 h-10 bg-white rounded-xl items-center justify-center border border-slate-100"
        >
          <Ionicons name="chevron-back" size={20} color="#1E40FF" />
        </TouchableOpacity>
        <Text className="text-xl font-poppins-bold text-slate-900">Learning Center</Text>
        <TouchableOpacity 
          onPress={handleShare}
          className="w-10 h-10 bg-white rounded-xl items-center justify-center border border-slate-100"
        >
          <Ionicons name="share-social-outline" size={20} color="#1E40FF" />
        </TouchableOpacity>
      </View>

      <View className="bg-blue-50 rounded-3xl p-8 items-center mb-8 border border-blue-100">
        <View className="w-20 h-20 bg-primary rounded-3xl items-center justify-center shadow-xl shadow-primary mb-6">
          <Ionicons name="book" size={40} color="white" />
        </View>
        <View className="flex-row items-center mb-3">
          <View className="bg-primary/10 px-3 py-1 rounded-md mr-2">
            <Text className="text-primary text-[10px] font-poppins-bold uppercase">{topic.category}</Text>
          </View>
          {isCompleted && (
            <View className="bg-emerald-100 px-3 py-1 rounded-md flex-row items-center">
              <Ionicons name="checkmark-circle" size={12} color="#059669" />
              <Text className="text-emerald-700 text-[10px] font-poppins-bold uppercase ml-1">Completed</Text>
            </View>
          )}
        </View>
        <Text className="text-2xl font-poppins-bold text-slate-900 text-center leading-8">{topic.title}</Text>
      </View>

      <View className="mb-8">
        <Text className="text-xl font-poppins-bold text-slate-900 mb-4">Introduction</Text>
        <Text className="text-slate-600 font-poppins-medium text-base leading-7">
          {topic.content}
        </Text>
      </View>

      <View className="mb-8">
        <Text className="text-xl font-poppins-bold text-slate-900 mb-4">Key Concepts</Text>
        {topic.bulletPoints.map((point, index) => (
          <View key={index} className="flex-row items-start mb-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm shadow-slate-100">
            <View className="w-8 h-8 bg-blue-50 rounded-full items-center justify-center mr-4 mt-1">
              <Text className="text-primary font-poppins-bold text-sm">{index + 1}</Text>
            </View>
            <Text className="flex-1 text-slate-700 font-poppins-medium text-sm leading-6">
              {point}
            </Text>
          </View>
        ))}
      </View>

      <View className="mb-8">
        <Text className="text-xl font-poppins-bold text-slate-900 mb-4">Real-world Examples</Text>
        <View className="bg-slate-900 rounded-3xl p-6">
          {topic.examples.map((example, index) => (
            <View key={index} className="flex-row items-start mb-4">
              <View style={{ marginRight: 12, marginTop: 4 }}>
                <Ionicons name="bulb" size={20} color="#F59E0B" />
              </View>
              <Text className="flex-1 text-slate-300 font-poppins-medium text-sm leading-6">
                {example}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity 
        onPress={handleToggleComplete}
        className={`rounded-20 py-4 items-center justify-center mb-12 shadow-lg ${
          isCompleted 
            ? 'bg-emerald-600 shadow-emerald-600/30' 
            : 'bg-primary shadow-primary/30'
        }`}
      >
        <View className="flex-row items-center">
          <Ionicons 
            name={isCompleted ? "checkmark-circle" : "checkmark-circle-outline"} 
            size={22} 
            color="white" 
          />
          <Text className="text-white font-poppins-bold text-lg ml-2">
            {isCompleted ? 'Completed ✓ (Tap to Undo)' : 'Mark as Completed'}
          </Text>
        </View>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default LearningDetailScreen;
