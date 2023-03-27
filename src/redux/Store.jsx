import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // missions: missionsReducer,
    // rockets: rocketReducer,
  },
});

export default store;
