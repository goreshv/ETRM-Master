import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LearningTopic } from './learningService';

const COMMUNITY_STORAGE_KEY = '@etrm_community_concepts';
const BASE_URL = 'https://etrm-master-backend.onrender.com/api/concepts/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export interface CommunityConcept {
  id?: number | string;
  author_name: string;
  category: string;
  title: string;
  answer: string;
  key_takeaways?: string;
  example?: string;
  is_approved?: boolean;
  created_at?: string;
}

// Convert a community concept into a first-class LearningTopic
export const convertConceptToTopic = (concept: CommunityConcept): LearningTopic => {
  const takeaways = concept.key_takeaways
    ? concept.key_takeaways.split('\n').map(s => s.trim().replace(/^•\s*/, '')).filter(Boolean)
    : [concept.answer.slice(0, 140) + '...'];

  const examples = concept.example
    ? [{ title: `Practical Scenario by ${concept.author_name}`, scenario: concept.example }]
    : [];

  return {
    id: `comm_${concept.id || Math.floor(Math.random() * 100000)}`,
    title: concept.title,
    category: concept.category,
    order: -Number(concept.id || 1), // Appear right at the top of the learning stream
    author_name: concept.author_name,
    is_community: true,
    summary: concept.answer.length > 160 ? `${concept.answer.slice(0, 160)}...` : concept.answer,
    content: concept.answer,
    sections: [
      {
        heading: `Community Insight & Explanation`,
        points: [concept.answer],
      }
    ],
    keyTakeaways: takeaways,
    examples: examples,
  };
};

export const communityService = {
  // Get all locally cached community concepts
  getLocalConcepts: async (): Promise<CommunityConcept[]> => {
    try {
      const raw = await AsyncStorage.getItem(COMMUNITY_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error reading local community concepts:', e);
    }
    return [];
  },

  // Save community concepts locally
  saveLocalConcepts: async (concepts: CommunityConcept[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(concepts));
    } catch (e) {
      console.warn('Error saving local community concepts:', e);
    }
  },

  // Fetch community concepts from backend, merging with local storage
  getConcepts: async (): Promise<CommunityConcept[]> => {
    try {
      const response = await api.get('');
      if (Array.isArray(response.data) && response.data.length > 0) {
        await communityService.saveLocalConcepts(response.data);
        return response.data;
      }
    } catch (error: any) {
      console.log('Backend concepts fetch fell back to local cache:', error?.message || error);
    }

    return await communityService.getLocalConcepts();
  },

  // Submit a new concept / Q&A from a user
  submitConcept: async (
    data: Omit<CommunityConcept, 'id' | 'created_at'>
  ): Promise<CommunityConcept> => {
    const newConcept: CommunityConcept = {
      ...data,
      id: Math.floor(10000 + Math.random() * 90000),
      is_approved: true,
      created_at: new Date().toISOString(),
    };

    // Optimistically save locally immediately so user sees it right away
    const localCurrent = await communityService.getLocalConcepts();
    const updatedLocal = [newConcept, ...localCurrent];
    await communityService.saveLocalConcepts(updatedLocal);

    // Try posting to remote backend
    try {
      const response = await api.post('', {
        author_name: data.author_name,
        category: data.category,
        title: data.title,
        answer: data.answer,
        key_takeaways: data.key_takeaways || '',
        example: data.example || '',
        is_approved: true,
      });

      if (response?.data?.id) {
        // Replace temporary ID with server ID in local cache
        const savedItem = response.data;
        const finalized = updatedLocal.map(c => (c.id === newConcept.id ? savedItem : c));
        await communityService.saveLocalConcepts(finalized);
        return savedItem;
      }
    } catch (error: any) {
      console.log('Remote concept submission fallback to local storage:', error?.message || error);
    }

    return newConcept;
  }
};
