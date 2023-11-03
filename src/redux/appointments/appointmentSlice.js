import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = 'http://localhost:3000/messages';

export const getAppointment = createAsyncThunk('reservation/getReservation', () => axios.get(dataUrl)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

export const postData = createAsyncThunk('reservation/postData', async (bookDetail) => axios.post(dataUrl, {
  item_id: bookDetail.item_id,
  title: bookDetail.title,
  author: 'suzan collins',
  category: bookDetail.category,
  headers: {
    'Content-type': 'application/json',
  },
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
    addAppointment: (state, action) => {
      state.reservation = [...state.books, action.payload];
    },
    removeAppointment: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
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
export default appointmentSlice;
