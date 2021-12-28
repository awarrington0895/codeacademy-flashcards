import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, { payload }) => {
      state.topics[payload.id] = {...payload, quizIds: []}
    }
  }
});

export const selectTopics = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;