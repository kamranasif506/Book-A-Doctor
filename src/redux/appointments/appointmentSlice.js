import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const dataUrl = 'http://localhost:4000/api/v1/doctors/:doctor_id/appointments';

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

export const deleteData = createAsyncThunk('appointment/deleteData', async (itemid) => axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books/${itemid}`, {
  body: JSON.stringify({
    item_id: itemid,
    app_id: 'McvW73kTCQbVPzcD7S2A',
  }),
  headers: {
    'Content-type': 'application/json',
  },
}).then((response) => response).catch((err) => console.log(err)));

const initialState = {
  reservation: [],
  isLoading: true,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    // addAppointment: (state, action) => {
    //   state.reservation = [...state.books, action.payload];
    // },
    // removeAppointment: (state, action) => {
    //   const bookId = action.payload;
    //   state.books = state.books.filter((item) => item.item_id !== bookId);
    // },
  },
  extraReducers: {
    [getAppointment.pending]: (state) => {
      state.isLoading = true;
    },
    [getAppointment.rejected]: (state) => {
      state.isLoading = false;
    },
    [postData.pending]: (state) => {
      state.isLoading = true;
    },
    [postData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addAppointment, removeAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
