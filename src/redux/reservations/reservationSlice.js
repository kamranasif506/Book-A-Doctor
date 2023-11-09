import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

const initialState = {
  reservationList: [],
  status: 'idle', // Initialize status to 'idle'
  isLoading: false,
  error: null, // Add an error field to store potential errors
};

const reservationListURl = `${config.apiBaseUrl}${config.reservationListEndpoint}`;
export const reservationsList = createAsyncThunk(
  'reservations/fetch',
  async (headers, thunkAPI) => {
    try {
      const response = await axios.get(reservationListURl, {
        headers: { ...headers },
      });
      return response.data; // Return the data part of the response
    } catch (error) {
      const errorMessage = error.response?.data || 'An error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reservationsList.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
        state.error = null; // Clear any previous errors when starting a new request
      })
      .addCase(reservationsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservationList = action.payload;
        state.status = 'success';
        state.error = null; // Clear any previous errors when the request succeeds
      })
      .addCase(reservationsList.rejected, (state, action) => {
        state.isLoading = false;
        state.status = 'rejected';
        state.error = action.error.message; // Store the error message
      });
  },
});

export default reservationSlice.reducer;
