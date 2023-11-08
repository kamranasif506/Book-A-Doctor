import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import navSlice from './navbar/navSlice';
import appointmentReducer from './appointments/appointmentSlice';
import doctorReducer from './doctors/doctorSlice';
import authReducer from './auth/authSlice';
import specializationReducer from './specialization/specializationSlice';
import reservationReducer from './reservations/reservationSlice';

const rootReducer = combineReducers({
  navbar: navSlice.reducer,
  auth: authReducer,
  appointment: appointmentReducer,
  doctor: doctorReducer,
  specialization: specializationReducer,
  reservation: reservationReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
