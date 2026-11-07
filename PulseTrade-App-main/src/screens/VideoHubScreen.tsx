import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  Linking,
  RefreshControl,
  Share,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import ScreenContainer from '../components/layout/ScreenContainer';
import { videoService, VideoTutorial } from '../services/videoService';

const VIDEO_CATEGORIES = [
  'All',
  'Featured',
  'Foundations',
  'Trade Lifecycle',
  'Endur Architecture',
  'RightAngle Architecture',
  'Systems'
];

const CHANNEL_URL = 'https://www.youtube.com/@TheETRMInsider';

const VideoHubScreen = () => {
  const navigation = useNavigation<any>();
  const [videos, setVideos] = useState<VideoTutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const loadData = async (showSpinner = false) => {
    if (showSpinner) setLoading(true);
    try {
      const data = await videoService.getVideos();
      setVideos(data);
    } catch (_) {
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData(false);
    }, [])
  );

  useEffect(() => {
    loadData(true);
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadData(false);
  };

  const handleOpenUrl = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(url);
      }
    } catch (e) {
      Alert.alert('Cannot Open Link', 'Unable to open YouTube on this device.');
    }
  };

  const handleShare = async (item: VideoTutorial) => {
    try {
      await Share.share({
        title: item.title,
        message: `Check out this ETRM Master video lesson: "${item.title}" by ${item.channel_name}\n\n${item.url}`,
        url: item.url,
      });
    } catch (_) {}
  };

  const filteredVideos = useMemo(() => {
    return videos.filter((v) => {
      if (activeCategory === 'All') return true;
      if (activeCategory === 'Featured') return Boolean(v.is_featured_home);
      return v.category === activeCategory;
    });
  }, [videos, activeCategory]);

  const renderHeader = () => (
    <View className="mb-4">
      {/* Top Navigation Bar */}
      <View className="flex-row items-center justify-between mt-2 mb-3">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-10 h-10 rounded-2xl bg-white border border-slate-200 items-center justify-center shadow-sm"
          accessibilityLabel="Back"
        >
          <Ionicons name="arrow-back" size={20} color="#1E293B" />
        </TouchableOpacity>

        <View className="flex-row items-center">
          <Ionicons name="logo-youtube" size={22} color="#EF4444" />
          <Text className="text-slate-900 font-poppins-bold text-lg ml-2">Video Masterclasses</Text>
        </View>

        <TouchableOpacity
          onPress={() => handleOpenUrl(CHANNEL_URL)}
          className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 items-center justify-center shadow-sm"
          accessibilityLabel="Open YouTube Channel"
        >
          <Ionicons name="open-outline" size={18} color="#EF4444" />
        </TouchableOpacity>
      </View>

      {/* Creator Collaboration Banner */}
      <View className="rounded-3xl overflow-hidden mb-4 shadow-md">
        <LinearGradient
          colors={['#0F172A', '#1E293B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="p-5"
        >
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-row items-center flex-1 mr-3">
              <View className="w-12 h-12 rounded-2xl bg-red-600 items-center justify-center shadow-md">
                <Ionicons name="play" size={24} color="white" />
              </View>
              <View className="ml-3 flex-1">
                <View className="flex-row items-center">
                  <Text className="text-white font-poppins-bold text-base">The ETRM Insider</Text>
                  <Ionicons name="checkmark-circle" size={16} color="#38BDF8" style={{ marginLeft: 4 }} />
                </View>
                <Text className="text-slate-300 font-poppins-regular text-xs">
                  By Srinivasa Reddy Mudiyala • Industry Delivery Head
                </Text>
              </View>
            </View>
          </View>

          <Text className="text-slate-300 font-poppins-regular text-xs leading-5 mb-4">
            Curated video courses and deep-dive architectural comparisons covering Endur, RightAngle, Allegro, and the end-to-end Energy Trade Lifecycle.
          </Text>

          <TouchableOpacity
            onPress={() => handleOpenUrl(CHANNEL_URL)}
            activeOpacity={0.88}
            className="bg-red-600 px-4 py-2.5 rounded-xl flex-row items-center justify-center shadow-sm self-start"
          >
            <Ionicons name="logo-youtube" size={16} color="white" />
            <Text className="text-white font-poppins-bold text-xs ml-2">Subscribe on YouTube 🔔</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      {/* Category Filter Pills */}
      <View style={{ height: 42, marginBottom: 4 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 2, alignItems: 'center' }}
        >
          {VIDEO_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setActiveCategory(cat)}
                activeOpacity={0.8}
                style={{
                  height: 34,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 14,
                  borderRadius: 17,
                  marginRight: 8,
                  backgroundColor: isActive ? '#EF4444' : '#FFFFFF',
                  borderColor: isActive ? '#EF4444' : '#E2E8F0',
                  borderWidth: 1,
                  shadowColor: isActive ? '#EF4444' : '#000',
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

  const renderVideoItem = ({ item }: { item: VideoTutorial }) => {
    const isPlaylist = item.content_type === 'PLAYLIST';
    const fallbackImage = isPlaylist
      ? 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop';
    const imageUrl = item.thumbnail_url || fallbackImage;

    return (
      <TouchableOpacity
        onPress={() => handleOpenUrl(item.url)}
        activeOpacity={0.92}
        className="bg-white rounded-3xl overflow-hidden mb-4 border border-slate-200 shadow-sm"
      >
        {/* Thumbnail with Overlay */}
        <View className="relative w-full h-44 bg-slate-900 justify-center items-center overflow-hidden">
          <Image
            source={{ uri: imageUrl }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(15, 23, 42, 0.75)']}
            className="absolute inset-0"
          />

          {/* Centered Play Button */}
          <View className="w-14 h-14 rounded-full bg-red-600/90 items-center justify-center shadow-lg border border-white/30">
            <Ionicons name="play" size={24} color="white" style={{ marginLeft: 3 }} />
          </View>

          {/* Type Badge (Top Right) */}
          <View className="absolute top-3 right-3">
            <View
              className={`px-3 py-1 rounded-full flex-row items-center ${
                isPlaylist ? 'bg-purple-600' : 'bg-red-600'
              }`}
            >
              <Ionicons
                name={isPlaylist ? 'albums-outline' : 'videocam-outline'}
                size={12}
                color="white"
              />
              <Text className="text-white font-poppins-bold text-[10px] uppercase tracking-wider ml-1">
                {isPlaylist ? 'Course Playlist' : 'Masterclass'}
              </Text>
            </View>
          </View>

          {/* Category Pill (Top Left) */}
          <View className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <Text className="text-white font-poppins-semibold text-[10px] tracking-wide">
              {item.category}
            </Text>
          </View>

          {/* Duration Badge (Bottom Right) */}
          {item.duration && (
            <View className="absolute bottom-3 right-3 bg-black/75 px-2 py-0.5 rounded-md">
              <Text className="text-white font-poppins-medium text-[10px]">
                {item.duration}
              </Text>
            </View>
          )}
        </View>

        {/* Video Card Content */}
        <View className="p-4">
          <Text className="text-slate-900 font-poppins-bold text-base leading-6 mb-1">
            {item.title}
          </Text>

          {item.summary && (
            <Text className="text-slate-500 font-poppins-regular text-xs leading-5 mb-3" numberOfLines={2}>
              {item.summary}
            </Text>
          )}

          {/* Action Row */}
          <View className="flex-row items-center justify-between pt-3 border-t border-slate-100">
            <View className="flex-row items-center">
              <Ionicons name="logo-youtube" size={16} color="#EF4444" />
              <Text className="text-slate-700 font-poppins-semibold text-xs ml-1.5">
                {item.channel_name}
              </Text>
            </View>

            <View className="flex-row items-center">
              <TouchableOpacity
                onPress={() => handleShare(item)}
                className="w-8 h-8 rounded-full bg-slate-100 items-center justify-center mr-2"
                accessibilityLabel="Share Video"
              >
                <Ionicons name="share-social-outline" size={15} color="#64748B" />
              </TouchableOpacity>

              <View className="bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl flex-row items-center">
                <Text className="text-red-600 font-poppins-bold text-xs">Watch ➔</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenContainer scrollable={false}>
      {loading ? (
        <View className="flex-1 items-center justify-center py-20">
          <ActivityIndicator size="large" color="#EF4444" />
          <Text className="text-slate-500 font-poppins-medium text-xs mt-3">
            Loading video masterclasses...
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredVideos}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderVideoItem}
          ListHeaderComponent={renderHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={['#EF4444']}
              tintColor="#EF4444"
            />
          }
        />
      )}
    </ScreenContainer>
  );
};

export default VideoHubScreen;
