import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import navSlice from './navbar/navSlice';
// eslint-disable-next-line import/extensions
// import appointmentSlice from './appointment/appointmentSlice';
// import testSlice from './first/testSlice';
// import authSlice from './auth/authSlice';
// import doctorSlice from './doctor/doctorSlice';

const rootReducer = combineReducers({
  navbar: navSlice.reducer,
  // tests: testSlice.reducer,
  // auth: authSlice.reducer,
  // doctors: doctorSlice.reducer,
  // appointment: appointmentSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
