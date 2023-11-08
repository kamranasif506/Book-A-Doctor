import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAppointment = createAsyncThunk('reservation/getReservation', async (doctorId) => axios.get(`http://localhost:4000/api/v1/doctors/${doctorId}/appointments`)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

const token = localStorage.getItem('token');

export const postData = createAsyncThunk('reservation/postData', async (appointment) => axios.post(`http://localhost:4000/api/v1/doctors/${appointment.docId}/appointments`, appointment, {
  headers: {
    'Content-type': 'application/json',
    // eslint-disable-next-line quote-props
    'Authorization': token,
  },
  body: JSON.stringify(appointment),
}).then((response) => response.data).catch((err) => console.log(err)));

const initialState = {
  reservation: [],
  isLoading: true,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {},
  extraReducers: {
    [getAppointment.pending]: (state) => {
      state.isLoading = true;
    },
    [getAppointment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getAppointment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addAppointment, removeAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
