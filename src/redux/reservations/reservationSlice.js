import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

const initialState = {
  reservationList: [],
  status: 'Rejected',
  isLoading: false,
};
const headers = {
  'Content-Type': 'application/json',
  Authorization: localStorage.getItem('token'),
};

const reservationListURl = `${config.apiBaseUrl}${config.loginEndpoint}`;
export const reservationsList = createAsyncThunk(
  'reservations/fetch',
  async (thunkAPI) => {
    try {
    //   console.log(data);
      const response = await axios.get(reservationListURl, { headers });

      return response;
    } catch (error) {
      const errorMessage = error.response?.data || 'An error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

const reservationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reservationsList.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(reservationsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user.data;
        state.token = action.payload.token;
        state.status = action.payload.user.status.message;
      })
      .addCase(reservationsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'failed';
        state.status = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
