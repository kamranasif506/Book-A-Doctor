import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const testsURL = 'https://book-doctor-api.onrender.com/api/tests';
// import testImage from './../../hack-4.jpg';

export const fetchTests = createAsyncThunk(
  'test/fetch',
  async () => {
    const res = await axios.get(testsURL);
    return res.data;
  },
);

const initialState = {
  tests: [],
  isLoading: false,
};

const testSlice = createSlice({
  name: 'tests',
  initialState,
  reducers: {
    testReducer: (state, action) => {
      const data = action.payload;
      state.tests = data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTests.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTests.fulfilled, (state, action) => {
      state.isLoading = false;
      const res = action.payload;
      state.tests = res;
    });
  },
});

export const testActions = testSlice.actions;

export default testSlice;
