import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import navSlice from './navbar/navSlice';
import authSlice from './auth/authSlice';
// import testSlice from './first/testSlice';
// import authSlice from './auth/authSlice';
// import doctorSlice from './doctor/doctorSlice';

const rootReducer = combineReducers({
  navbar: navSlice.reducer,
  auth: authSlice.reducer,
  // tests: testSlice.reducer,
  // auth: authSlice.reducer,
  // doctors: doctorSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
