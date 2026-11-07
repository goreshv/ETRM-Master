import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ScreenContainer from '../components/layout/ScreenContainer';
import LearningCard from '../components/cards/LearningCard';
import { learningService, LearningTopic } from '../services/learningService';
import { setTopics } from '../store/learningSlice';

const COMPLETED_TOPICS_KEY = '@completed_topics_list';

const LEARNING_CATEGORIES = [
  'All', 
  'Foundations',
  'Oil',
  'Natural Gas',
  'LNG',
  'Power',
  'Master Data', 
  'Risk,Valuations & PnL',
  'Physical Markets',
  'Credit,Risk Limits',
  'Post Trade & Settlement',
  'Operations',
  'Compliance',
];

const LearningScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const topics: LearningTopic[] = useSelector((state: any) => state.learning.topics || []);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const flatListRef = useRef<FlatList>(null);

  const loadTopicsAndProgress = async () => {
    try {
      const [data, completedRaw] = await Promise.all([
        learningService.getTopics(),
        AsyncStorage.getItem(COMPLETED_TOPICS_KEY)
      ]);

      dispatch(setTopics(data));

      if (completedRaw) {
        const parsed = JSON.parse(completedRaw);
        if (Array.isArray(parsed)) {
          setCompletedIds(parsed);
          return;
        }
      }
      setCompletedIds([]);
    } catch (e) {
      console.warn('Error reloading topics and progress:', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadTopicsAndProgress();
    }, [])
  );

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [activeCategory, searchQuery]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: { [key: string]: number } = { 
      All: (topics || []).length,
    };
    (topics || []).forEach(t => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, [topics]);

  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return (topics || []).filter((topic: LearningTopic) => {
      const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      // Safe multi-field search including author name
      const titleMatch = (topic.title || '').toLowerCase().includes(query);
      const summaryMatch = (topic.summary || '').toLowerCase().includes(query);
      const contentMatch = (topic.content || '').toLowerCase().includes(query);
      const authorMatch = (topic.author_name || '').toLowerCase().includes(query);
      const takeawaysMatch = (topic.keyTakeaways || []).some(k => (k || '').toLowerCase().includes(query));
      const sectionMatch = (topic.sections || []).some(s => 
        (s.heading || '').toLowerCase().includes(query) || 
        (s.points || []).some(p => (p || '').toLowerCase().includes(query))
      );

      return titleMatch || summaryMatch || contentMatch || authorMatch || takeawaysMatch || sectionMatch;
    });
  }, [topics, activeCategory, searchQuery]);

  const renderCategoryTabs = () => (
    <View style={{ height: 56, marginBottom: 8 }}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 2, paddingVertical: 6, alignItems: 'center' }}
      >
        {LEARNING_CATEGORIES.map((cat) => {
          const count = categoryCounts[cat] || 0;
          const isActive = activeCategory === cat;

          return (
            <TouchableOpacity 
              key={cat}
              onPress={() => setActiveCategory(cat)}
              activeOpacity={0.8}
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 14,
                borderRadius: 20,
                marginRight: 8,
                backgroundColor: isActive ? '#1E40FF' : '#FFFFFF',
                borderColor: isActive ? '#1E40FF' : '#E2E8F0',
                borderWidth: 1,
                shadowColor: isActive ? '#1E40FF' : '#000',
                shadowOffset: { width: 0, height: isActive ? 3 : 1 },
                shadowOpacity: isActive ? 0.25 : 0.04,
                shadowRadius: isActive ? 4 : 2,
                elevation: isActive ? 3 : 1,
              }}
              className="flex-row items-center"
            >
              <Text className={`font-poppins-semibold text-xs ${
                isActive ? 'text-white' : 'text-slate-600'
              }`}>
                {cat}
              </Text>
              {count > 0 && (
                <View 
                  style={{
                    marginLeft: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 1,
                    borderRadius: 10,
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : '#F1F5F9',
                  }}
                >
                  <Text className={`text-[10px] font-poppins-bold ${
                    isActive ? 'text-white' : 'text-slate-500'
                  }`}>
                    {count}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <ScreenContainer scrollable={false}>
      {/* Header with Search Button */}
      <View className="flex-row items-center justify-between mt-2 mb-2">
        <View>
          <Text className="text-3xl font-poppins-bold text-slate-900">Learning Center</Text>
          <Text className="text-slate-400 font-poppins-medium text-xs">
            {filteredTopics.length} Curriculum Topics • {completedIds.length} Mastered ✓
          </Text>
        </View>
        <View className="flex-row items-center space-x-2">
          {/* Search Toggle Button */}
          <TouchableOpacity 
            onPress={() => {
              setShowSearch(!showSearch);
              if (showSearch) setSearchQuery('');
            }}
            className={`w-10 h-10 rounded-2xl items-center justify-center border ${
              showSearch ? 'bg-primary border-primary' : 'bg-white border-slate-100'
            } shadow-sm`}
            accessibilityLabel="Toggle Search"
          >
            <Ionicons 
              name={showSearch ? "close" : "search"} 
              size={18} 
              color={showSearch ? "white" : "#1E40FF"} 
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Input Bar */}
      {showSearch && (
        <View className="mb-2 bg-white rounded-2xl px-4 py-3 border border-slate-200 flex-row items-center shadow-sm">
          <Ionicons name="search-outline" size={18} color="#94A3B8" />
          <TextInput
            placeholder="Search concepts, authors, pricing, pipelines..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true}
            className="flex-1 ml-2 font-poppins-medium text-sm text-slate-900"
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color="#94A3B8" />
            </TouchableOpacity>
          )}
        </View>
      )}

      {renderCategoryTabs()}

      <FlatList
        ref={flatListRef}
        data={filteredTopics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isCompleted = completedIds.includes(item.id);
          return (
            <LearningCard 
              title={item.title}
              category={item.category}
              summary={item.summary || (item.sections?.[0]?.points?.[0] ?? 'Tap to read comprehensive learning content and real-world examples.')}
              onPress={() => navigation.navigate('LearningDetail', { topicId: item.id })}
              isCompleted={isCompleted}
              authorName={item.author_name}
              isCommunity={item.is_community}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130 }}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center mt-14 px-6">
            <View className="w-16 h-16 rounded-full bg-slate-100 items-center justify-center mb-3">
              <Ionicons name="book-outline" size={32} color="#94A3B8" />
            </View>
            <Text className="text-slate-800 font-poppins-bold text-base text-center">
              No topics found
            </Text>
            <Text className="text-slate-400 font-poppins-medium text-xs text-center mt-1">
              {searchQuery ? `No matching topics for "${searchQuery}"` : 'Be the first to share a concept or Q&A in this section!'}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Community')}
              className="mt-4 px-4 py-2.5 bg-primary rounded-xl flex-row items-center"
            >
              <Ionicons name="people" size={16} color="white" />
              <Text className="text-white font-poppins-bold text-xs ml-1.5">Explore Community Q&A</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

export default LearningScreen;
