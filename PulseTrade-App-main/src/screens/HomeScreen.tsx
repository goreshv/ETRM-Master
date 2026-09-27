import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ScreenContainer from '../components/layout/ScreenContainer';
import SectionHeader from '../components/layout/SectionHeader';
import LearningCard from '../components/cards/LearningCard';
import SkeletonLoader from '../components/loaders/SkeletonLoader';
import Logo from '../components/common/Logo';

import { learningService, LearningTopic } from '../services/learningService';
import { setTopics } from '../store/learningSlice';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const topics = useSelector((state: any) => state.learning.topics);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const topicsData = await learningService.getTopics();
        dispatch(setTopics(topicsData));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const renderGreeting = () => (
    <View className="flex-row justify-between items-center mt-4 mb-8">
      <Logo size={45} showText={true} />
      <TouchableOpacity 
        onPress={() => Alert.alert('ETRM Master Updates ⚡️', '• New physical gas & LNG transport simulation available!\n• Check Quiz Center to test your knowledge across 7 domains.')}
        className="w-12 h-12 bg-white rounded-20 items-center justify-center shadow-sm shadow-slate-200 border border-slate-100"
      >
        <Ionicons name="notifications-outline" size={24} color="#1E40FF" />
      </TouchableOpacity>
    </View>
  );

  const renderSkeleton = () => (
    <View>
      <SkeletonLoader height={200} borderRadius={20} style={{ marginBottom: 20 }} />
      <SkeletonLoader height={100} borderRadius={20} style={{ marginBottom: 10 }} />
      <SkeletonLoader height={100} borderRadius={20} style={{ marginBottom: 10 }} />
    </View>
  );

  const renderSimulatorCTA = () => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Simulator')}
      className="mb-8"
    >
      <LinearGradient
        colors={['#1E40FF', '#4F46E5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-6 rounded-3xl"
      >
        <View className="flex-row justify-between items-center">
          <View className="flex-1 mr-4">
            <Text className="text-white font-poppins-bold text-xl mb-1">Trade Simulator</Text>
            <Text className="text-blue-100 font-poppins-medium text-xs">Practice the full ETRM lifecycle with real-world scenarios.</Text>
          </View>
          <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center">
            <Ionicons name="rocket" size={24} color="white" />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <ScreenContainer scrollable={true}>
      {renderGreeting()}

      {loading ? (
        renderSkeleton()
      ) : (
        <>
          {renderSimulatorCTA()}

          <SectionHeader title="📚 Featured Learning" onSeeAll={() => navigation.navigate('Learn')} />
          {topics.slice(0, 3).map((topic: LearningTopic) => (
            <View key={topic.id} className="mb-4">
              <LearningCard 
                title={topic.title}
                category={topic.category}
                summary={topic.summary}
                onPress={() => navigation.navigate('LearningDetail', { topicId: topic.id })}
              />
            </View>
          ))}
          
          <SectionHeader title="🎓 Recent Modules" onSeeAll={() => navigation.navigate('Learn')} />
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
            className="mb-8"
          >
            {topics.slice(3, 8).map((topic: LearningTopic) => (
              <TouchableOpacity 
                key={topic.id}
                onPress={() => navigation.navigate('LearningDetail', { topicId: topic.id })}
                className="bg-white p-4 rounded-2xl mr-4 border border-slate-100 shadow-sm w-64"
              >
                <View className="bg-blue-50 self-start px-2 py-1 rounded-lg mb-2">
                  <Text className="text-primary font-poppins-bold text-[10px] uppercase">{topic.category}</Text>
                </View>
                <Text className="text-slate-900 font-poppins-bold text-sm mb-1" numberOfLines={1}>{topic.title}</Text>
                <Text className="text-slate-500 font-poppins-medium text-[10px]" numberOfLines={2}>{topic.summary}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      )}
    </ScreenContainer>
  );
};

export default HomeScreen;
