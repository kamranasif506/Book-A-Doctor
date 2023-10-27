import { configureStore } from '@reduxjs/toolkit';
import testSlice from './first/testSlice';

const rootReducer = {
  tests: testSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
