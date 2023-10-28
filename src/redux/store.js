import { configureStore } from '@reduxjs/toolkit';
import navSlice from './navbar/navSlice';

const rootReducer = {
  navbar: navSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
