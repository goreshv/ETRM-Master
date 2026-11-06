import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreenContainer from '../components/layout/ScreenContainer';
import SectionHeader from '../components/layout/SectionHeader';
import LearningCard from '../components/cards/LearningCard';
import SkeletonLoader from '../components/loaders/SkeletonLoader';
import Logo from '../components/common/Logo';
import AiDisclaimerModal from '../components/common/AiDisclaimerModal';
import UserOnboardingModal from '../components/common/UserOnboardingModal';
import SubmitConceptModal from '../components/common/SubmitConceptModal';

import { learningService, LearningTopic } from '../services/learningService';
import { userService, UserProfile } from '../services/userService';
import { setTopics } from '../store/learningSlice';

const COMPLETED_TOPICS_KEY = '@completed_topics_list';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const topics: LearningTopic[] = useSelector((state: any) => state.learning.topics || []);

  const loadData = async (showSpinner = false) => {
    if (showSpinner) setLoading(true);
    try {
      const [topicsData, completedRaw, localUser] = await Promise.all([
        learningService.getTopics(),
        AsyncStorage.getItem(COMPLETED_TOPICS_KEY),
        userService.getLocalUser(),
      ]);

      if (topicsData) {
        dispatch(setTopics(topicsData));
      }

      if (localUser) {
        setUserProfile(localUser);
      } else {
        // Trigger onboarding to capture user's name on start
        setShowOnboarding(true);
      }

      if (completedRaw) {
        const parsed: string[] = JSON.parse(completedRaw);
        if (Array.isArray(parsed)) {
          setCompletedIds(parsed);
        }
      } else {
        setCompletedIds([]);
      }
    } catch (error) {
      console.error('Error fetching Home data:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData(false);
    }, [])
  );

  useEffect(() => {
    loadData(true);
  }, [dispatch]);

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const renderHeader = () => (
    <View className="mt-2 mb-3">
      {/* Top Brand & Profile Bar */}
      <View className="flex-row justify-between items-center mb-3">
        <Logo size={40} showText={true} />
        <View className="flex-row items-center space-x-2">
          {/* User Profile Pill */}
          <TouchableOpacity
            onPress={() => setShowOnboarding(true)}
            className="flex-row items-center bg-blue-50 px-3 py-1.5 rounded-2xl border border-blue-100 mr-2"
          >
            <Ionicons name="person-circle" size={18} color="#1E40FF" />
            <Text className="text-slate-800 font-poppins-bold text-xs ml-1.5" numberOfLines={1}>
              {userProfile?.name ? userProfile.name.split(' ')[0] : 'Join'}
            </Text>
          </TouchableOpacity>

          {/* AI Disclosure Info Button */}
          <TouchableOpacity
            onPress={() => setShowDisclaimer(true)}
            className="w-10 h-10 bg-white rounded-2xl items-center justify-center border border-slate-100 mr-2 shadow-sm"
            accessibilityLabel="AI Content Disclosure"
          >
            <Ionicons name="information-circle-outline" size={20} color="#1E40FF" />
          </TouchableOpacity>

          {/* Notifications / Updates Button */}
          <TouchableOpacity 
            onPress={() => Alert.alert(
              'ETRM Master Community ⚡️',
              `Welcome ${userProfile?.name || 'Trader'}!\n• 160+ Curriculum Topics & 270+ Quizzes.\n• Community Q&A: Share questions & answers to the live learning screen.\n• All content is AI-generated for educational training.`
            )}
            className="w-10 h-10 bg-white rounded-2xl items-center justify-center shadow-sm border border-slate-100"
            accessibilityLabel="Notifications"
          >
            <Ionicons name="notifications-outline" size={20} color="#1E40FF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* AI Educational Notice Banner */}
      <TouchableOpacity
        onPress={() => setShowDisclaimer(true)}
        activeOpacity={0.8}
        className="bg-blue-50/80 border border-blue-100 rounded-2xl px-3.5 py-2.5 flex-row items-center justify-between shadow-sm"
      >
        <View className="flex-row items-center flex-1 mr-2">
          <Ionicons name="sparkles" size={16} color="#1E40FF" />
          <Text className="text-slate-700 font-poppins-medium text-xs ml-2" numberOfLines={1}>
            <Text className="font-poppins-bold text-primary">Notice:</Text> 100% AI-generated educational content • No organisation data
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={14} color="#1E40FF" />
      </TouchableOpacity>
    </View>
  );

  const renderProgressOverview = () => {
    const totalTopics = topics.length || 163;
    const completedCount = completedIds.length;
    const progressPercent = Math.min(100, Math.round((completedCount / totalTopics) * 100));

    return (
      <View className="bg-white p-5 rounded-3xl mb-5 shadow-sm border border-slate-100">
        <View className="flex-row justify-between items-center mb-3">
          <View>
            <Text className="text-slate-400 font-poppins-semibold uppercase text-[10px] tracking-wider">
              {getTimeGreeting()}, {userProfile?.name || 'Energy Trader'}
            </Text>
            <Text className="text-slate-900 font-poppins-bold text-lg">Curriculum Progress</Text>
          </View>
          <View className="bg-primary/10 px-3 py-1 rounded-full">
            <Text className="text-primary font-poppins-bold text-xs">{progressPercent}% Completed</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View className="h-2.5 bg-slate-100 rounded-full overflow-hidden mb-3">
          <View 
            style={{ width: `${Math.max(4, progressPercent)}%` }} 
            className="h-full bg-primary rounded-full"
          />
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-slate-500 font-poppins-medium text-xs">
            {completedCount} of {totalTopics} Lessons Mastered
          </Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Quiz')}
            className="flex-row items-center"
          >
            <Text className="text-primary font-poppins-semibold text-xs mr-1">Take Quiz</Text>
            <Ionicons name="arrow-forward" size={12} color="#1E40FF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderSimulatorCTA = () => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Simulator')}
      className="mb-5"
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={['#1E40FF', '#4338CA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="p-5 rounded-3xl shadow-lg shadow-primary/25"
      >
        <View className="flex-row justify-between items-center">
          <View className="flex-1 mr-4">
            <View className="bg-white/20 self-start px-2 py-0.5 rounded-md mb-2">
              <Text className="text-white text-[10px] font-poppins-bold uppercase tracking-wider">Hands-On Practice</Text>
            </View>
            <Text className="text-white font-poppins-bold text-xl mb-1">ETRM Trade Simulator</Text>
            <Text className="text-blue-100 font-poppins-medium text-xs leading-5">
              Execute trades across Oil, Gas & Power. Manage scheduling, nominations, actualization, and settlement invoices.
            </Text>
          </View>
          <View className="w-14 h-14 bg-white/15 rounded-2xl items-center justify-center border border-white/20">
            <Ionicons name="rocket-outline" size={28} color="white" />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderCommunityCTA = () => (
    <TouchableOpacity 
      onPress={() => setShowSubmitModal(true)}
      activeOpacity={0.88}
      className="bg-amber-500/10 border border-amber-200 p-4 rounded-3xl mb-5 flex-row items-center justify-between"
    >
      <View className="flex-row items-center flex-1 mr-3">
        <View className="w-11 h-11 bg-amber-500 rounded-2xl items-center justify-center shadow-sm">
          <Ionicons name="people" size={22} color="white" />
        </View>
        <View className="ml-3 flex-1">
          <Text className="text-slate-900 font-poppins-bold text-sm">Collaborate & Share Q&A</Text>
          <Text className="text-slate-600 font-poppins-medium text-xs" numberOfLines={1}>
            Submit your concept or question with your author name!
          </Text>
        </View>
      </View>
      <View className="bg-amber-500 px-3 py-1.5 rounded-xl">
        <Text className="text-white font-poppins-bold text-xs">+ Submit</Text>
      </View>
    </TouchableOpacity>
  );

  const renderQuickPills = () => {
    const quickCategories = [
      { name: 'Oil', icon: 'water', color: '#3B82F6', bg: '#EFF6FF' },
      { name: 'Natural Gas', icon: 'flame', color: '#F59E0B', bg: '#FEF3C7' },
      { name: 'Power', icon: 'flash', color: '#10B981', bg: '#D1FAE5' },
      { name: 'LNG', icon: 'snow', color: '#06B6D4', bg: '#CFFAFE' },
    ];

    return (
      <View className="mb-6">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-slate-900 font-poppins-bold text-base">Explore Commodities</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Learn')}>
            <Text className="text-primary font-poppins-semibold text-xs">All Topics</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between">
          {quickCategories.map((c) => (
            <TouchableOpacity
              key={c.name}
              onPress={() => navigation.navigate('Learn')}
              style={{ width: '23%', backgroundColor: c.bg }}
              className="p-3 rounded-2xl items-center border border-slate-100 shadow-sm"
            >
              <Ionicons name={c.icon as any} size={22} color={c.color} />
              <Text className="text-slate-800 font-poppins-semibold text-[11px] mt-1.5 text-center" numberOfLines={1}>
                {c.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderSkeleton = () => (
    <View>
      <SkeletonLoader height={70} borderRadius={20} style={{ marginBottom: 16 }} />
      <SkeletonLoader height={140} borderRadius={24} style={{ marginBottom: 20 }} />
      <SkeletonLoader height={120} borderRadius={20} style={{ marginBottom: 16 }} />
      <SkeletonLoader height={100} borderRadius={20} style={{ marginBottom: 10 }} />
    </View>
  );

  return (
    <ScreenContainer scrollable={true}>
      {renderHeader()}

      {loading ? (
        renderSkeleton()
      ) : (
        <>
          {renderProgressOverview()}
          {renderSimulatorCTA()}
          {renderCommunityCTA()}
          {renderQuickPills()}

          {/* Featured Learning Section */}
          <SectionHeader title="📚 Featured Modules" onSeeAll={() => navigation.navigate('Learn')} />
          {topics.slice(0, 3).map((topic: LearningTopic) => {
            const isCompleted = completedIds.includes(topic.id);
            return (
              <View key={topic.id} className="mb-2">
                <LearningCard 
                  title={topic.title}
                  category={topic.category}
                  summary={topic.summary || 'Tap to explore comprehensive learning content and real-world trade scenarios.'}
                  onPress={() => navigation.navigate('LearningDetail', { topicId: topic.id })}
                  isCompleted={isCompleted}
                  authorName={topic.author_name}
                  isCommunity={topic.is_community}
                />
              </View>
            );
          })}
          
          {/* Recent Curriculum Topics Horizontal Carousel */}
          <View className="mt-4 mb-2">
            <SectionHeader title="🎓 Recommended Next" onSeeAll={() => navigation.navigate('Learn')} />
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
              className="mb-8"
            >
              {topics.slice(3, 11).map((topic: LearningTopic) => {
                const isCompleted = completedIds.includes(topic.id);

                return (
                  <TouchableOpacity 
                    key={topic.id}
                    onPress={() => navigation.navigate('LearningDetail', { topicId: topic.id })}
                    className={`bg-white p-4 rounded-2xl mr-3 border ${
                      isCompleted ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-100'
                    } shadow-sm w-64 justify-between`}
                    style={{ height: 130 }}
                  >
                    <View>
                      <View className="flex-row items-center justify-between mb-2">
                        <View className="bg-blue-50 px-2 py-0.5 rounded-lg">
                          <Text className="text-primary font-poppins-bold text-[9px] uppercase tracking-wider">{topic.category}</Text>
                        </View>
                        {isCompleted && (
                          <View className="bg-emerald-100 px-2 py-0.5 rounded-full flex-row items-center">
                            <Ionicons name="checkmark-circle" size={10} color="#059669" />
                            <Text className="text-emerald-700 font-poppins-bold text-[8px] uppercase tracking-wider ml-1">Done</Text>
                          </View>
                        )}
                      </View>
                      <Text className="text-slate-900 font-poppins-bold text-sm mb-1 leading-5" numberOfLines={2}>
                        {topic.title}
                      </Text>
                    </View>
                    <View className="flex-row items-center justify-between pt-2 border-t border-slate-50">
                      <Text className="text-slate-400 font-poppins-medium text-[10px]">
                        {isCompleted ? 'Review Topic' : 'Tap to Read'}
                      </Text>
                      <Ionicons 
                        name={isCompleted ? "checkmark-circle" : "arrow-forward-circle"} 
                        size={18} 
                        color={isCompleted ? "#059669" : "#1E40FF"} 
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </>
      )}

      {/* Startup User Name Capture Onboarding Modal */}
      <UserOnboardingModal
        visible={showOnboarding}
        onUserSaved={(user) => {
          setUserProfile(user);
          setShowOnboarding(false);
        }}
        onClose={() => setShowOnboarding(false)}
      />

      {/* Community Concept Submission Modal */}
      <SubmitConceptModal
        visible={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onConceptSubmitted={() => {
          loadData(false);
        }}
      />

      {/* AI Content Notice Modal */}
      <AiDisclaimerModal
        visible={showDisclaimer}
        forceShow={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
