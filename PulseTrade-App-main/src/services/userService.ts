import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE_KEY = '@etrm_user_profile';
const DEVICE_ID_KEY = '@etrm_device_id';
const BASE_URL = 'https://etrm-master-backend.onrender.com/api/users/';

// 30-second timeout to allow Render free tier to cold-start from sleep
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface UserProfile {
  id?: number;
  name: string;
  role?: string;
  device_id?: string;
  created_at?: string;
  synced_with_backend?: boolean;
}

export const userService = {
  // Get or generate a persistent unique device identifier
  getDeviceId: async (): Promise<string> => {
    try {
      let devId = await AsyncStorage.getItem(DEVICE_ID_KEY);
      if (!devId) {
        devId = `dev_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        await AsyncStorage.setItem(DEVICE_ID_KEY, devId);
      }
      return devId;
    } catch (_) {
      return `dev_${Date.now()}`;
    }
  },

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

  // Sync user profile to backend database (recreates record if Render restarted)
  syncUserWithBackend: async (profile: UserProfile): Promise<UserProfile> => {
    if (!profile?.name?.trim()) return profile;

    try {
      const deviceId = profile.device_id || await userService.getDeviceId();
      const response = await api.post('', {
        name: profile.name.trim(),
        role: profile.role || 'Energy Learner',
        device_id: deviceId,
      });

      if (response?.data?.id) {
        const updated: UserProfile = {
          ...profile,
          id: response.data.id,
          device_id: deviceId,
          synced_with_backend: true,
        };
        await userService.saveLocalUser(updated);
        return updated;
      }
    } catch (error: any) {
      console.log('Background user sync notice:', error?.message || error);
    }

    return profile;
  },

  // Register user with backend database and store locally
  registerUser: async (name: string, role = 'Energy Learner'): Promise<UserProfile> => {
    const trimmedName = name.trim();
    const deviceId = await userService.getDeviceId();

    const profile: UserProfile = {
      name: trimmedName,
      role: role.trim() || 'Energy Learner',
      device_id: deviceId,
      created_at: new Date().toISOString(),
      synced_with_backend: false,
    };

    // Always save locally first so user experience is instant
    await userService.saveLocalUser(profile);

    // Sync with backend API
    try {
      const response = await api.post('', {
        name: trimmedName,
        role: profile.role,
        device_id: deviceId,
      });

      if (response?.data?.id) {
        const fullProfile: UserProfile = {
          ...profile,
          id: response.data.id,
          synced_with_backend: true,
        };
        await userService.saveLocalUser(fullProfile);
        return fullProfile;
      }
    } catch (error: any) {
      console.log('Initial user registration sync deferred:', error?.message || error);
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
