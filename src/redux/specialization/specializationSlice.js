import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const urlappoint = 'https://book-doctor-api.onrender.com/api/v1/specializations';
const headers = {
  Authorization: localStorage.getItem('token'),
};
// Create an async thunk to fetch appointments
export const getSpecialization = createAsyncThunk('specialization/fetch', async () => {
  const response = await axios.get(urlappoint, { headers });
  return response.data;
});

const initialState = {
  specializations: [],
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
      state.specializations = action.payload;
    },
    [getSpecialization.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addAppointment, removeAppointment } = specializationSlice.actions;
export default specializationSlice.reducer;
