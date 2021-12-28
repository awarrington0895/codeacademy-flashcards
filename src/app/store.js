import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";

const logger = ({ getState }) => (next) => (action) => {
  console.log("Will dispatch: ", action);

  const result = next(action);

  console.log("New state: ", getState());

  return result;
};

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
