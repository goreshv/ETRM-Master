import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import ScreenContainer from '../components/layout/ScreenContainer';
import LearningCard from '../components/cards/LearningCard';
import { learningService, LearningTopic } from '../services/learningService';
import { setTopics } from '../store/learningSlice';

const learningCategories = [
  'All', 
  'Foundations', 
  'Oil',
  'Natural Gas',
  'LNG',
  'Power',
  'Physical Markets',
  'Risk,Valuations & PnL',
  'Credit,Risk Limits', 
  'Post Trade & Settlement',
  'Operations',
  'Compliance'
];

const LearningScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const topics = useSelector((state: any) => state.learning.topics);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // If topics haven't been loaded into Redux yet, fetch them
    if (!topics || topics.length === 0) {
      const load = async () => {
        const data = await learningService.getTopics();
        dispatch(setTopics(data));
      };
      load();
    }
  }, [dispatch, topics]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    }
  }, [activeCategory, searchQuery]);

  const filteredTopics = (topics || []).filter((topic: LearningTopic) => {
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch = 
      topic.title.toLowerCase().includes(query) ||
      topic.summary.toLowerCase().includes(query) ||
      topic.content.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const renderCategoryTabs = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      className="mb-4 mt-2"
      contentContainerStyle={{ paddingRight: 20 }}
    >
      {learningCategories.map((cat) => (
        <TouchableOpacity 
          key={cat}
          onPress={() => setActiveCategory(cat)}
          style={{ minWidth: 80, height: 44, alignItems: 'center', justifyContent: 'center' }}
          className={`px-4 rounded-20 mr-2 border ${
            activeCategory === cat 
              ? 'bg-primary border-primary' 
              : 'bg-white border-slate-100'
          }`}
        >
          <Text className={`font-poppins-semibold ${
            activeCategory === cat ? 'text-white' : 'text-slate-500'
          }`}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <ScreenContainer scrollable={false}>
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-3xl font-poppins-bold text-slate-900">Learning Center</Text>
        <TouchableOpacity 
          onPress={() => {
            setShowSearch(!showSearch);
            if (showSearch) setSearchQuery('');
          }}
          className={`w-10 h-10 rounded-xl items-center justify-center border ${
            showSearch ? 'bg-primary border-primary' : 'bg-white border-slate-100'
          }`}
        >
          <Ionicons 
            name={showSearch ? "close" : "search"} 
            size={20} 
            color={showSearch ? "white" : "#1E40FF"} 
          />
        </TouchableOpacity>
      </View>

      {showSearch && (
        <View className="mt-3 mb-2 bg-white rounded-2xl px-4 py-3 border border-slate-200 flex-row items-center">
          <Ionicons name="search-outline" size={18} color="#94A3B8" />
          <TextInput
            placeholder="Search topics, concepts, terms..."
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
        renderItem={({ item }) => (
          <LearningCard 
            title={item.title}
            category={item.category}
            summary={item.summary}
            onPress={() => navigation.navigate('LearningDetail', { topicId: item.id })}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 130 }}
        ListEmptyComponent={() => (
          <View className="flex-1 items-center justify-center mt-20">
            <Ionicons name="book-outline" size={60} color="#CBD5E1" />
            <Text className="text-slate-400 font-poppins-medium mt-4">
              {searchQuery ? `No topics matching "${searchQuery}"` : 'No topics found in this category'}
            </Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
};

export default LearningScreen;
