import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('token');
const urlappoint = 'http://localhost:4000/api/v1/doctors';
const headers = {
  Authorization: localStorage.getItem('token'),
};
// Create an async thunk to fetch appointments
export const getDoctors = createAsyncThunk('appointments/fetch', async () => {
  const response = await axios.get(urlappoint, { headers });
  console.log(`doctors...${response.data}`);
  return response.data;
});
export const postData = createAsyncThunk('doctor/postData', async (doctor) => axios.post('http://localhost:4000/api/v1/doctors', doctor, {
  headers: {
    'Content-type': 'application/json',
    // eslint-disable-next-line quote-props
    'Authorization': token,
  },
  body: JSON.stringify(doctor),
}).then((response) => response.data).catch((err) => console.log(err)));

const initialState = {
  doctor: [],
  isLoading: true,
};
const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctors.pending]: (state) => {
      state.isLoading = true;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    },
    [getDoctors.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { addAppointment, removeAppointment } = doctorSlice.actions;
export default doctorSlice.reducer;
