import AsyncStorage from '@react-native-async-storage/async-storage';
import apiClient from './apiClient';

export interface VideoTutorial {
  id: number;
  title: string;
  category: string;
  content_type: 'VIDEO' | 'PLAYLIST';
  url: string;
  video_id?: string;
  thumbnail_url?: string;
  channel_name: string;
  channel_url: string;
  summary?: string;
  duration?: string;
  is_featured_home: boolean;
  order: number;
  created_at?: string;
}

const STORAGE_KEY = '@etrm_video_tutorials_cache';

export const INITIAL_VIDEOS: VideoTutorial[] = [
  {
    id: 1,
    title: "The Energy Trade Lifecycle: From Deal Capture to Settlement",
    content_type: "VIDEO",
    category: "Trade Lifecycle",
    url: "https://www.youtube.com/watch?v=KGHCXkJW8dU&list=PLURBCN1X3PXo&index=11",
    video_id: "KGHCXkJW8dU",
    thumbnail_url: "https://img.youtube.com/vi/KGHCXkJW8dU/hqdefault.jpg",
    channel_name: "The ETRM Insider",
    channel_url: "https://www.youtube.com/@TheETRMInsider",
    summary: "Step-by-step walkthrough of how a trade moves from deal capture and risk valuation to scheduling, actualization, and settlement.",
    duration: "Masterclass",
    is_featured_home: true,
    order: 1,
  },
  {
    id: 2,
    title: "Endur vs RightAngle vs Allegro: What’s the Difference?",
    content_type: "VIDEO",
    category: "Systems",
    url: "https://www.youtube.com/watch?v=4tYKccmnpXg&list=PLURBCN1X3PXo&index=2",
    video_id: "4tYKccmnpXg",
    thumbnail_url: "https://img.youtube.com/vi/4tYKccmnpXg/hqdefault.jpg",
    channel_name: "The ETRM Insider",
    channel_url: "https://www.youtube.com/@TheETRMInsider",
    summary: "Deep-dive comparison of Openlink Endur, ION RightAngle, and Allegro—their architectural strengths, market positioning, and commodities.",
    duration: "Masterclass",
    is_featured_home: true,
    order: 2,
  },
  {
    id: 3,
    title: "Start Here: ETRM for Beginners",
    content_type: "PLAYLIST",
    category: "Foundations",
    url: "https://www.youtube.com/playlist?list=PLHYcwi8PGzec",
    video_id: "",
    thumbnail_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
    channel_name: "The ETRM Insider",
    channel_url: "https://www.youtube.com/@TheETRMInsider",
    summary: "Complete beginner course playlist on Energy Trading & Risk Management fundamentals, commodity markets, and key industry roles.",
    duration: "Full Course Playlist",
    is_featured_home: false,
    order: 3,
  },
  {
    id: 4,
    title: "Endur for IT Beginners",
    content_type: "PLAYLIST",
    category: "Endur Architecture",
    url: "https://www.youtube.com/playlist?list=PLPdQU_9BRVEE",
    video_id: "",
    thumbnail_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    channel_name: "The ETRM Insider",
    channel_url: "https://www.youtube.com/@TheETRMInsider",
    summary: "Comprehensive IT practitioner series on Openlink Endur system architecture, deal modeling, configuration, and data workflows.",
    duration: "Full Course Playlist",
    is_featured_home: false,
    order: 4,
  },
  {
    id: 5,
    title: "RightAngle for IT Beginners",
    content_type: "PLAYLIST",
    category: "RightAngle Architecture",
    url: "https://www.youtube.com/playlist?list=PLbSUhbsaygJU",
    video_id: "",
    thumbnail_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    channel_name: "The ETRM Insider",
    channel_url: "https://www.youtube.com/@TheETRMInsider",
    summary: "Master ION RightAngle architecture, inventory accounting, vessel/pipeline movements, and physical crude/product operations.",
    duration: "Full Course Playlist",
    is_featured_home: false,
    order: 5,
  },
];

export const videoService = {
  getLocalVideos: async (): Promise<VideoTutorial[]> => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (_) {}
    return INITIAL_VIDEOS;
  },

  getVideos: async (): Promise<VideoTutorial[]> => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await apiClient.get<VideoTutorial[]>('/videos/', {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (Array.isArray(res.data) && res.data.length > 0) {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(res.data));
        return res.data;
      }
    } catch (e) {
      // Fallback gracefully on cold starts or network disconnects
    }
    return videoService.getLocalVideos();
  },

  getFeaturedHomeVideos: async (): Promise<VideoTutorial[]> => {
    const all = await videoService.getVideos();
    const featured = all.filter(v => v.is_featured_home);
    if (featured.length > 0) return featured;
    return all.slice(0, 2);
  }
};
