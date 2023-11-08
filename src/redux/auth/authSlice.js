import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  status: '',
  isLoading: false,
  error: null,
};
const headers = {
  'Content-Type': 'application/json',
};

const loginURl = `${config.apiBaseUrl}${config.loginEndpoint}`;
export const loginAuth = createAsyncThunk(
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

const signupURl = `${config.apiBaseUrl}${config.signupEndpoint}`;
export const signUpAuth = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
    //   console.log(data);
      const response = await axios.post(signupURl, data, { headers });
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

const logoutURl = `${config.apiBaseUrl}${config.logoutEndpoint}`;
export const logOutAuth = createAsyncThunk(
  'auth/logout',
  async (logOutHeaders, thunkAPI) => {
    try {
      const response = await axios.delete(logoutURl, {
        headers: { ...logOutHeaders },
      });
      localStorage.setItem('token', '');
      return response;
    } catch (error) {
      localStorage.setItem('token', '');
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
      .addCase(loginAuth.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(loginAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user.data;
        state.token = action.payload.token;
        state.status = action.payload.user.status.message;
      })
      .addCase(loginAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'failed';
        state.status = action.error.message;
      })
      .addCase(signUpAuth.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(signUpAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user.data;
        state.token = action.payload.token;
        state.status = action.payload.user.status.message;
      })
      .addCase(signUpAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'failed';
        state.status = action.error.message;
      })
      .addCase(logOutAuth.pending, (state) => {
        state.status = 'pending';
        state.isLoading = true;
      })
      .addCase(logOutAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.message;
        state.token = null;
        state.user = [];
      })
      .addCase(logOutAuth.rejected, (state, action) => {
        console.log('logged out');
        state.isLoading = false;
        state.error = 'failed';
        state.status = action.error.message;
      });
  },
});

export default authSlice.reducer;
