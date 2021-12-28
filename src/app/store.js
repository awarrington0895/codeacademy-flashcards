import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';

const logger = ({ getState }) => next => action => {
  console.log('Will dispatch: ', action);

  const result = next(action);

  console.log('New state: ', getState());

  return result;
}

export default configureStore({
  reducer: {
    topics: topicsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware() //.concat(logger)
});
