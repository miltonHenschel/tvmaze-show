import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './shows/showsSlice';

const store = configureStore({
  reducer: showsReducer,
});

export default store;
