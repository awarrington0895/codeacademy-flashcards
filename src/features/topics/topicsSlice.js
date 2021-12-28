import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, { payload }) => {
      state.topics[payload.id] = { ...payload, quizIds: [] };
    },
    addQuizToTopic: (state, { payload }) => {
      const { quizId, topicId } = payload;

      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = (state) => state?.topics?.topics;

export const { addTopic, addQuizToTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
