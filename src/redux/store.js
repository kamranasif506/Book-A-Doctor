import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import navSlice from './navbar/navSlice';
// eslint-disable-next-line import/extensions
import appointmentReducer from './appointments/appointmentSlice';
import doctorReducer from './doctors/doctorSlice';
import authReducer from './auth/authSlice';
// import testSlice from './first/testSlice';
// import authSlice from './auth/authSlice';
// import doctorSlice from './doctor/doctorSlice';

const rootReducer = combineReducers({
  navbar: navSlice.reducer,
  auth: authReducer,
  // tests: testSlice.reducer,
  // auth: authSlice.reducer,
  // doctors: doctorSlice.reducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
});

const store = configureStore({
  reducer: rootReducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
});

export default store;
