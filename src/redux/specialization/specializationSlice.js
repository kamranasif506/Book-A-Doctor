import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('token');
const urlappoint = 'http://localhost:4000/api/v1/specializations';
const headers = {
  Authorization: localStorage.getItem('token'),
};
// Create an async thunk to fetch appointments
export const getSpecialization = createAsyncThunk(
  'appointments/fetch',
  async () => {
    const response = await axios.get(urlappoint, { headers });
    return response.data;
  }
);
export const postData = createAsyncThunk(
  'doctor/postData',
  async (doctor) =>
    axios
      .post('http://localhost:4000/api/v1/doctors', doctor, {
        headers: {
          'Content-type': 'application/json',
          // eslint-disable-next-line quote-props
          Authorization: token,
        },
        body: JSON.stringify(doctor),
      })
      .then((response) => response.data)
      .catch((err) => console.log(err))
);
export const deleteData = createAsyncThunk(
  'appointment/deleteData',
  async (itemid) =>
    axios
      .delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books/${itemid}`,
        {
          body: JSON.stringify({
            item_id: itemid,
            app_id: 'McvW73kTCQbVPzcD7S2A',
          }),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      .then((response) => response)
      .catch((err) => console.log(err))
);
const initialState = {
  specialization: [],
  isLoading: true,
};
const specializationSlice = createSlice({
  name: 'specialization',
  initialState,
  reducers: {},
  extraReducers: {
    [getSpecialization.pending]: (state) => {
      state.isLoading = true;
    },
    [getSpecialization.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.specialization = action.payload;
    },
    [getSpecialization.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addAppointment, removeAppointment } =
  specializationSlice.actions;
export default specializationSlice.reducer;
