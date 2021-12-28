import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, { payload }) => {
      state.quizzes[payload.id] = payload;
    }
  }
});

const { addQuiz } = quizzesSlice.actions;

// Additional Action Creators
const addNewQuiz = (payload) => (dispatch) => {
  dispatch(quizzesSlice.actions.addQuiz(payload));
  dispatch(addQuizToTopic({ quizId: payload.id, topicId: payload.topicId }));
};

// Selectors
const selectQuizzes = (state) => state?.quizzes?.quizzes;

// Exports

export { selectQuizzes, addNewQuiz, addQuiz };

export default quizzesSlice.reducer;
