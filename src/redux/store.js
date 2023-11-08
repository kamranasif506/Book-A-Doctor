import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import navSlice from './navbar/navSlice';
import appointmentReducer from './appointments/appointmentSlice';
import doctorReducer from './doctors/doctorSlice';
import authReducer from './auth/authSlice';
import reservationReducer from './reservations/reservationSlice';
import specializationReducer from './specialization/specializationSlice';

const rootReducer = combineReducers({
  navbar: navSlice.reducer,
  auth: authReducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
  specialization: specializationReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
