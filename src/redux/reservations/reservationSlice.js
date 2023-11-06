import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

const initialState = {
  reservationList: [],
  status: 'Rejected',
  isLoading: false,
};

const reservationListURl = `${config.apiBaseUrl}${config.reservationListEndpoint}`;
export const reservationsList = createAsyncThunk(
  'reservations/fetch',
  async (headers, thunkAPI) => {
    try {
    //   console.log(data);
      const response = await axios.get(reservationListURl, {
        headers: { ...headers },
      });

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
        console.log(action.payload);
        state.isLoading = false;
        state.reservationList = action.payload.data;
        state.status = 'success';
      })
      .addCase(reservationsList.rejected, (state, action) => {
        state.isLoading = false;
        state.status = action.error.message;
      });
  },
});

export default reservationSlice.reducer;
