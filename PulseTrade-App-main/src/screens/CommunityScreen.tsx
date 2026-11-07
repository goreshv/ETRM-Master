import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  RefreshControl,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ScreenContainer from '../components/layout/ScreenContainer';
import SubmitConceptModal from '../components/common/SubmitConceptModal';
import { communityService, CommunityConcept } from '../services/communityService';
import { userService } from '../services/userService';

const COMMUNITY_CATEGORIES = [
  'All',
  'Oil',
  'Natural Gas',
  'LNG',
  'Power',
  'Foundations',
  'Risk,Valuations & PnL',
  'Physical Markets',
  'Post Trade & Settlement',
  'Operations',
  'Compliance',
  'Master Data'
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Oil': { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
  'Natural Gas': { bg: '#FEF3C7', text: '#B45309', border: '#FDE68A' },
  'LNG': { bg: '#CFFAFE', text: '#0E7490', border: '#A5F3FC' },
  'Power': { bg: '#D1FAE5', text: '#047857', border: '#A7F3D0' },
  'Foundations': { bg: '#EDE9FE', text: '#6D28D9', border: '#DDD6FE' },
  'Risk,Valuations & PnL': { bg: '#FEE2E2', text: '#B91C1C', border: '#FECACA' },
  'Physical Markets': { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' },
  'Post Trade & Settlement': { bg: '#F3E8FF', text: '#7E22CE', border: '#E9D5FF' },
  'Operations': { bg: '#FFF7ED', text: '#C2410C', border: '#FFEDD5' },
  'Compliance': { bg: '#F1F5F9', text: '#475569', border: '#E2E8F0' },
  'Master Data': { bg: '#F8FAFC', text: '#334155', border: '#E2E8F0' },
};

const CommunityScreen = () => {
  const navigation = useNavigation<any>();
  const [concepts, setConcepts] = useState<CommunityConcept[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [expandedId, setExpandedId] = useState<string | number | null>(null);
  const [userCount, setUserCount] = useState<number>(1);

  const loadCommunityData = async (showSpinner = false) => {
    if (showSpinner) setLoading(true);
    try {
      const [list, count] = await Promise.all([
        communityService.getConcepts(),
        userService.getUserCount(),
      ]);
      setConcepts(list);
      setUserCount(count);
    } catch (e) {
      console.warn('Error loading community data:', e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadCommunityData(false);
    }, [])
  );

  useEffect(() => {
    loadCommunityData(true);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadCommunityData(false);
  };

  const filteredConcepts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return concepts.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      if (!matchesCategory) return false;

      if (!q) return true;
      const titleMatch = (item.title || '').toLowerCase().includes(q);
      const answerMatch = (item.answer || '').toLowerCase().includes(q);
      const authorMatch = (item.author_name || '').toLowerCase().includes(q);
      const categoryMatch = (item.category || '').toLowerCase().includes(q);
      const takeawaysMatch = (item.key_takeaways || '').toLowerCase().includes(q);
      const exampleMatch = (item.example || '').toLowerCase().includes(q);

      return titleMatch || answerMatch || authorMatch || categoryMatch || takeawaysMatch || exampleMatch;
    });
  }, [concepts, activeCategory, searchQuery]);

  const toggleExpand = (id: string | number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const formatDate = (isoString?: string) => {
    if (!isoString) return 'Recently';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (_) {
      return 'Recently';
    }
  };

  const renderHeader = () => (
    <View className="mt-2 mb-3">
      {/* Top Banner */}
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-1 mr-2">
          <View className="flex-row items-center">
            <Text className="text-2xl font-poppins-bold text-slate-900 tracking-tight">
              Community <Text className="text-amber-500">Q&A</Text> ⚡️
            </Text>
          </View>
          <Text className="text-slate-500 font-poppins-regular text-xs mt-0.5">
            Share and learn energy trading concepts from peers worldwide
          </Text>
        </View>

        {/* Member Count Pill */}
        <View className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-2xl flex-row items-center">
          <Ionicons name="people" size={14} color="#D97706" />
          <Text className="text-amber-800 font-poppins-bold text-xs ml-1.5">
            {userCount} {userCount === 1 ? 'Learner' : 'Learners'}
          </Text>
        </View>
      </View>

      {/* Share Q&A CTA Banner */}
      <TouchableOpacity
        onPress={() => setShowSubmitModal(true)}
        activeOpacity={0.9}
        className="rounded-2xl overflow-hidden mb-3 shadow-sm"
      >
        <LinearGradient
          colors={['#D97706', '#F59E0B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="p-4 flex-row items-center justify-between"
        >
          <View className="flex-1 mr-3">
            <View className="flex-row items-center">
              <View className="bg-white/25 px-2 py-0.5 rounded-md self-start mb-1">
                <Text className="text-white text-[9px] font-poppins-bold uppercase tracking-wider">
                  Open Collaboration
                </Text>
              </View>
            </View>
            <Text className="text-white font-poppins-bold text-base">Have a Question or Concept?</Text>
            <Text className="text-amber-100 font-poppins-medium text-xs mt-0.5">
              Publish your question, answer, and practical scenario. Your author name will be visible to all users.
            </Text>
          </View>

          <View className="bg-white px-3.5 py-2.5 rounded-xl shadow-sm flex-row items-center">
            <Ionicons name="add-circle" size={18} color="#D97706" />
            <Text className="text-amber-700 font-poppins-bold text-xs ml-1.5">Share Q&A</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* Search Input */}
      <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-3.5 py-2 mb-2 shadow-sm">
        <Ionicons name="search" size={18} color="#94A3B8" />
        <TextInput
          placeholder="Search by topic, concept, question, or author..."
          placeholderTextColor="#94A3B8"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="flex-1 ml-2 text-slate-800 font-poppins-medium text-xs"
          clearButtonMode="while-editing"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={18} color="#94A3B8" />
          </TouchableOpacity>
        )}
      </View>

      {/* Category Pills Filter */}
      <View style={{ height: 48, marginBottom: 4 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 2, paddingVertical: 4, alignItems: 'center' }}
        >
          {COMMUNITY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setActiveCategory(cat)}
                activeOpacity={0.8}
                style={{
                  height: 36,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 14,
                  borderRadius: 18,
                  marginRight: 8,
                  backgroundColor: isActive ? '#D97706' : '#FFFFFF',
                  borderColor: isActive ? '#D97706' : '#E2E8F0',
                  borderWidth: 1,
                  shadowColor: isActive ? '#D97706' : '#000',
                  shadowOffset: { width: 0, height: isActive ? 2 : 1 },
                  shadowOpacity: isActive ? 0.2 : 0.04,
                  shadowRadius: 3,
                  elevation: isActive ? 2 : 1,
                }}
              >
                <Text
                  className={`font-poppins-semibold text-xs ${
                    isActive ? 'text-white' : 'text-slate-600'
                  }`}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );

  const renderConceptItem = ({ item }: { item: CommunityConcept }) => {
    const isExpanded = expandedId === item.id;
    const catStyle = CATEGORY_COLORS[item.category] || { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' };
    const dateFormatted = formatDate(item.created_at);

    return (
      <View
        className="bg-white rounded-2xl p-4 mb-3 border border-slate-100 shadow-sm"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.04,
          shadowRadius: 4,
          elevation: 1,
        }}
      >
        {/* Card Header: Category & Date */}
        <View className="flex-row items-center justify-between mb-2">
          <View
            style={{ backgroundColor: catStyle.bg, borderColor: catStyle.border, borderWidth: 1 }}
            className="px-2.5 py-0.5 rounded-full"
          >
            <Text style={{ color: catStyle.text }} className="font-poppins-bold text-[10px] uppercase tracking-wider">
              {item.category}
            </Text>
          </View>

          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={12} color="#94A3B8" />
            <Text className="text-slate-400 font-poppins-regular text-[10px] ml-1">{dateFormatted}</Text>
          </View>
        </View>

        {/* Question / Concept Title */}
        <Text className="text-slate-900 font-poppins-bold text-base mb-1.5 leading-6">
          {item.title}
        </Text>

        {/* Author Attribution Badge */}
        <View className="flex-row items-center mb-3">
          <View className="w-5 h-5 rounded-full bg-amber-100 items-center justify-center mr-1.5">
            <Ionicons name="person" size={10} color="#D97706" />
          </View>
          <Text className="text-slate-600 font-poppins-medium text-xs">
            Contributed by <Text className="font-poppins-bold text-slate-800">{item.author_name}</Text>
          </Text>
        </View>

        {/* Answer / Explanation */}
        <View className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2.5">
          <Text className="text-[11px] font-poppins-semibold text-slate-500 uppercase tracking-wider mb-1">
            Explanation / Answer
          </Text>
          <Text
            className="text-slate-700 font-poppins-regular text-xs leading-5"
            numberOfLines={isExpanded ? undefined : 3}
          >
            {item.answer}
          </Text>
        </View>

        {/* Expandable Details: Key Takeaways & Example */}
        {isExpanded && (
          <View className="mt-1 pt-2 border-t border-slate-100">
            {/* Key Takeaways */}
            {item.key_takeaways ? (
              <View className="mb-2.5">
                <Text className="text-[11px] font-poppins-bold text-slate-800 mb-1">⚡️ Key Takeaways:</Text>
                {item.key_takeaways.split('\n').filter(Boolean).map((pt, idx) => (
                  <View key={idx} className="flex-row items-start mb-1">
                    <Text className="text-amber-500 font-poppins-bold text-xs mr-1.5">•</Text>
                    <Text className="text-slate-600 font-poppins-regular text-xs flex-1 leading-5">
                      {pt.replace(/^•\s*/, '')}
                    </Text>
                  </View>
                ))}
              </View>
            ) : null}

            {/* Real World Scenario */}
            {item.example ? (
              <View className="bg-amber-50/60 p-3 rounded-xl border border-amber-100">
                <Text className="text-[11px] font-poppins-bold text-amber-900 mb-1">💡 Real-World Scenario:</Text>
                <Text className="text-slate-700 font-poppins-regular text-xs leading-5">
                  {item.example}
                </Text>
              </View>
            ) : null}
          </View>
        )}

        {/* Expand / Collapse Action Button */}
        <TouchableOpacity
          onPress={() => item.id && toggleExpand(item.id)}
          className="flex-row items-center justify-between pt-2 border-t border-slate-50 mt-1"
        >
          <Text className="text-primary font-poppins-semibold text-xs">
            {isExpanded ? 'Show Less' : 'Read Full Concept'}
          </Text>
          <Ionicons
            name={isExpanded ? 'chevron-up-circle' : 'chevron-down-circle'}
            size={18}
            color="#1E40FF"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmptyState = () => (
    <View className="items-center justify-center py-12 px-6">
      <View className="w-16 h-16 rounded-3xl bg-amber-50 items-center justify-center mb-3 border border-amber-100">
        <Ionicons name="chatbubbles-outline" size={32} color="#D97706" />
      </View>
      <Text className="text-base font-poppins-bold text-slate-800 text-center">
        {searchQuery ? 'No matching community topics found' : `No questions in ${activeCategory} yet`}
      </Text>
      <Text className="text-xs font-poppins-regular text-slate-500 text-center mt-1 mb-5">
        Be the first to share an energy trading question, answer, or practical scenario!
      </Text>
      <TouchableOpacity
        onPress={() => setShowSubmitModal(true)}
        className="bg-amber-500 px-5 py-2.5 rounded-2xl flex-row items-center shadow-sm"
      >
        <Ionicons name="add-circle" size={18} color="white" />
        <Text className="text-white font-poppins-bold text-xs ml-1.5">Share First Q&A</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScreenContainer>
      {loading ? (
        <View className="flex-1 items-center justify-center py-20">
          <ActivityIndicator size="large" color="#D97706" />
          <Text className="text-slate-500 font-poppins-medium text-xs mt-3">
            Loading community concepts...
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredConcepts}
          keyExtractor={(item, index) => String(item.id || index)}
          renderItem={renderConceptItem}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderEmptyState}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#D97706']}
              tintColor="#D97706"
            />
          }
        />
      )}

      {/* Floating Action Button (+ Share Q&A) */}
      <TouchableOpacity
        onPress={() => setShowSubmitModal(true)}
        activeOpacity={0.88}
        style={{
          position: 'absolute',
          bottom: 84,
          right: 20,
          elevation: 6,
          shadowColor: '#D97706',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
        }}
        className="bg-amber-500 px-4 py-3 rounded-full flex-row items-center"
      >
        <Ionicons name="create" size={18} color="white" />
        <Text className="text-white font-poppins-bold text-xs ml-2">Ask / Share</Text>
      </TouchableOpacity>

      {/* Concept Submission Modal */}
      <SubmitConceptModal
        visible={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onConceptSubmitted={() => {
          loadCommunityData(false);
        }}
      />
    </ScreenContainer>
  );
};

export default CommunityScreen;
