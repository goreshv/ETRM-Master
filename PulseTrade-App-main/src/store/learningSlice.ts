import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LearningTopic } from '../services/learningService';

interface LearningState {
  topics: LearningTopic[];
  loading: boolean;
  error: string | null;
}

const initialState: LearningState = {
  topics: [],
  loading: false,
  error: null,
};

const learningSlice = createSlice({
  name: 'learning',
  initialState,
  reducers: {
    setTopics: (state, action: PayloadAction<LearningTopic[]>) => {
      state.topics = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setTopics, setLoading, setError } = learningSlice.actions;
export default learningSlice.reducer;
