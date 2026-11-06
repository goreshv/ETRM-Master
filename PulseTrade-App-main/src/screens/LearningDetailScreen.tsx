import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Share,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreenContainer from '../components/layout/ScreenContainer';
import { learningService, LearningTopic } from '../services/learningService';

const COMPLETED_TOPICS_KEY = '@completed_topics_list';

const LearningDetailScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const topicId = route.params?.topicId;

  const [topic, setTopic] = useState<LearningTopic | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [allTopics, setAllTopics] = useState<LearningTopic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!topicId) {
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const [topicData, allList, completedRaw] = await Promise.all([
          learningService.getTopicDetail(topicId),
          learningService.getTopics(),
          AsyncStorage.getItem(COMPLETED_TOPICS_KEY)
        ]);

        if (topicData) {
          setTopic(topicData);
        }
        if (allList) {
          setAllTopics(allList);
        }

        if (completedRaw) {
          const completedList: string[] = JSON.parse(completedRaw);
          setIsCompleted(completedList.includes(topicId));
        }
      } catch (error) {
        console.error('Error fetching topic detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topicId]);

  const currentIndex = allTopics.findIndex(t => t.id === topicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex >= 0 && currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Toggle module completion status
  const handleToggleComplete = async () => {
    if (!topicId) return;

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
        Alert.alert('Topic Mastered! 🎉', `You completed "${topic?.title}". Keep building your ETRM expertise!`);
      }

      await AsyncStorage.setItem(COMPLETED_TOPICS_KEY, JSON.stringify(completedList));
    } catch (error) {
      console.warn('Error updating completion status:', error);
    }
  };

  const handleShare = async () => {
    if (!topic) return;

    try {
      const shareContent = [
        `ETRM Master: ${topic.title}`,
        `Category: ${topic.category}`,
        topic.author_name ? `Contributed By: ${topic.author_name}` : '',
        '',
        ...(topic.sections || []).flatMap(section => [
          section.heading,
          ...(section.points || []).map(point => `• ${point}`),
          ''
        ]),
        'Key Takeaways:',
        ...(topic.keyTakeaways || []).map(item => `• ${item}`),
      ].filter(Boolean);

      await Share.share({
        title: topic.title,
        message: shareContent.join('\n'),
      });
    } catch (error) {
      console.warn('Share error:', error);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#1E40FF" />
        <Text className="text-slate-400 font-poppins-medium text-xs mt-3">Loading curriculum module...</Text>
      </View>
    );
  }

  if (!topic) {
    return (
      <View className="flex-1 bg-white items-center justify-center p-6">
        <Ionicons name="alert-circle-outline" size={48} color="#64748B" />
        <Text className="text-lg font-poppins-bold text-slate-900 mt-4">Topic Not Found</Text>
        <Text className="text-slate-500 text-center mt-2 text-xs">
          The requested learning topic could not be located.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-primary px-6 py-3 rounded-xl mt-6"
        >
          <Text className="text-white font-poppins-bold">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScreenContainer scrollable={true}>
      {/* Top Navigation Bar */}
      <View className="flex-row items-center justify-between mt-3 mb-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 bg-white rounded-2xl items-center justify-center border border-slate-100 shadow-sm"
          accessibilityLabel="Back"
        >
          <Ionicons name="chevron-back" size={20} color="#1E40FF" />
        </TouchableOpacity>

        <Text className="text-base font-poppins-bold text-slate-800">
          Learning Module
        </Text>

        <TouchableOpacity
          onPress={handleShare}
          className="w-10 h-10 bg-white rounded-2xl items-center justify-center border border-slate-100 shadow-sm"
          accessibilityLabel="Share"
        >
          <Ionicons name="share-social-outline" size={20} color="#1E40FF" />
        </TouchableOpacity>
      </View>

      {/* Hero Header Card */}
      <View className="bg-blue-50/70 rounded-3xl p-6 items-center mb-6 border border-blue-100 shadow-sm">
        <View className="w-16 h-16 bg-primary rounded-2xl items-center justify-center shadow-lg shadow-primary/30 mb-4">
          <Ionicons name={topic.is_community ? "people" : "book"} size={30} color="white" />
        </View>

        <View className="flex-row items-center mb-2.5 flex-wrap justify-center">
          <View className="bg-primary/10 px-3 py-1 rounded-full mr-2 mb-1">
            <Text className="text-primary text-[10px] font-poppins-bold uppercase tracking-wider">
              {topic.category}
            </Text>
          </View>

          {topic.is_community && (
            <View className="bg-amber-100 px-3 py-1 rounded-full mr-2 mb-1 flex-row items-center">
              <Ionicons name="person" size={11} color="#B45309" />
              <Text className="text-amber-800 text-[10px] font-poppins-bold uppercase tracking-wider ml-1">
                Contributed by {topic.author_name || 'Community'}
              </Text>
            </View>
          )}

          {isCompleted && (
            <View className="bg-emerald-100 px-3 py-1 rounded-full flex-row items-center mb-1">
              <Ionicons name="checkmark-circle" size={12} color="#059669" />
              <Text className="text-emerald-700 text-[10px] font-poppins-bold uppercase tracking-wider ml-1">
                Completed
              </Text>
            </View>
          )}
        </View>

        <Text className="text-xl font-poppins-bold text-slate-900 text-center leading-7">
          {topic.title}
        </Text>
      </View>

      {/* Sections Content */}
      <View className="mb-6">
        <Text className="text-lg font-poppins-bold text-slate-900 mb-4">
          {topic.is_community ? 'Community Question & Answer' : 'Detailed Curriculum'}
        </Text>

        {(topic.sections ?? []).map((section, index) => (
          <View key={index} className="bg-white p-5 rounded-2xl mb-4 border border-slate-100 shadow-sm">
            <Text className="text-base font-poppins-bold text-slate-900 mb-3">
              {section.heading}
            </Text>

            {(section.points ?? []).map((point, pointIndex) => (
              <View key={pointIndex} className="flex-row items-start mb-2.5">
                <View className="w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                <Text className="flex-1 text-slate-600 font-poppins-medium text-xs leading-6">
                  {point}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Key Takeaways Card */}
      {(topic.keyTakeaways ?? []).length > 0 && (
        <View className="mb-6">
          <Text className="text-lg font-poppins-bold text-slate-900 mb-3">
            Key Takeaways
          </Text>

          <View className="bg-blue-50/60 rounded-3xl p-5 border border-blue-100">
            {(topic.keyTakeaways ?? []).map((point, index) => (
              <View key={index} className="flex-row items-start mb-3 last:mb-0">
                <View className="w-6 h-6 bg-white rounded-full items-center justify-center mr-3 mt-0.5 border border-blue-100">
                  <Ionicons name="checkmark" size={14} color="#1E40FF" />
                </View>
                <Text className="flex-1 text-slate-700 font-poppins-medium text-xs leading-5">
                  {point}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Real-world Scenarios Card */}
      {(topic.examples ?? []).length > 0 && (
        <View className="mb-8">
          <Text className="text-lg font-poppins-bold text-slate-900 mb-3">
            Real-World Scenarios
          </Text>

          <View className="bg-slate-900 rounded-3xl p-5">
            {(topic.examples ?? []).map((example, index) => (
              <View key={index} className="mb-4 last:mb-0">
                <View className="flex-row items-center mb-2">
                  <Ionicons name="bulb" size={18} color="#F59E0B" />
                  <Text className="text-white font-poppins-bold text-sm ml-2">
                    {example.title}
                  </Text>
                </View>
                <Text className="text-slate-300 font-poppins-medium text-xs leading-6">
                  {example.scenario}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Mark Completed Button */}
      <TouchableOpacity
        onPress={handleToggleComplete}
        activeOpacity={0.85}
        className={`rounded-2xl py-4 items-center justify-center mb-6 shadow-md ${
          isCompleted
            ? 'bg-emerald-600 shadow-emerald-600/25'
            : 'bg-primary shadow-primary/25'
        }`}
      >
        <View className="flex-row items-center">
          <Ionicons
            name={isCompleted ? 'checkmark-circle' : 'checkmark-circle-outline'}
            size={20}
            color="white"
          />
          <Text className="text-white font-poppins-bold text-base ml-2">
            {isCompleted ? 'Completed ✓ (Tap to Undo)' : 'Mark as Completed'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Prev / Next Topic Navigation */}
      <View className="flex-row justify-between items-center mb-10 pt-4 border-t border-slate-100">
        {prevTopic ? (
          <TouchableOpacity
            onPress={() => navigation.replace('LearningDetail', { topicId: prevTopic.id })}
            className="flex-1 mr-2 p-3 bg-white rounded-2xl border border-slate-100"
          >
            <Text className="text-slate-400 font-poppins-medium text-[10px]">Previous</Text>
            <Text className="text-slate-800 font-poppins-bold text-xs" numberOfLines={1}>{prevTopic.title}</Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-1 mr-2" />
        )}

        {nextTopic && (
          <TouchableOpacity
            onPress={() => navigation.replace('LearningDetail', { topicId: nextTopic.id })}
            className="flex-1 ml-2 p-3 bg-white rounded-2xl border border-slate-100 items-end"
          >
            <Text className="text-primary font-poppins-medium text-[10px]">Next Lesson</Text>
            <Text className="text-slate-800 font-poppins-bold text-xs" numberOfLines={1}>{nextTopic.title}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScreenContainer>
  );
};

export default LearningDetailScreen;
