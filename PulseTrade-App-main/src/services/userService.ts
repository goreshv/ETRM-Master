import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE_KEY = '@etrm_user_profile';
const BASE_URL = 'https://etrm-master-backend.onrender.com/api/users/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export interface UserProfile {
  id?: number;
  name: string;
  role?: string;
  device_id?: string;
  created_at?: string;
}

export const userService = {
  // Get currently registered local user
  getLocalUser: async (): Promise<UserProfile | null> => {
    try {
      const raw = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Error reading local user profile:', e);
    }
    return null;
  },

  // Save user profile locally
  saveLocalUser: async (profile: UserProfile): Promise<void> => {
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Error saving local user profile:', e);
    }
  },

  // Register user with backend database and store locally
  registerUser: async (name: string, role = 'Energy Learner'): Promise<UserProfile> => {
    const trimmedName = name.trim();
    const profile: UserProfile = {
      name: trimmedName,
      role: role.trim() || 'Energy Learner',
      created_at: new Date().toISOString(),
    };

    // Always save locally first so user experience is instant
    await userService.saveLocalUser(profile);

    // Sync with backend API
    try {
      const response = await api.post('', {
        name: trimmedName,
        role: profile.role,
      });

      if (response?.data?.id) {
        const fullProfile = {
          ...profile,
          id: response.data.id,
        };
        await userService.saveLocalUser(fullProfile);
        return fullProfile;
      }
    } catch (error: any) {
      console.log('Backend user sync deferred/offline, saved locally:', error?.message || error);
    }

    return profile;
  },

  // Get total count of registered users for analytics
  getUserCount: async (): Promise<number> => {
    try {
      const response = await api.get('count/');
      if (response?.data?.total_users != null) {
        return response.data.total_users;
      }
    } catch (e) {
      // Backend offline fallback
    }
    return 1;
  }
};
