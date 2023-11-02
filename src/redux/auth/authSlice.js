import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  status: 'Rejected',
  isLoading: false,
  error: null,
};
const headers = {
  'Content-Type': 'application/json',
};

const loginURl = `${config.apiBaseUrl}${config.loginEndpoint}`;
export const LoginAuth = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
    //   console.log(data);
      const response = await axios.post(loginURl, data, { headers });
      const user = response.data;
      const token = response.headers.authorization;
      localStorage.setItem('token', token);
      const res = { user, token };
      return res;
    } catch (error) {
      const errorMessage = error.response?.data || 'An error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginAuth.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(LoginAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user.data;
        state.token = action.payload.token;
        state.status = action.payload.user.status.message;
      })
      .addCase(LoginAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'failed';
        state.status = action.error.message;
      });
  },
});

export default authSlice.reducer;
