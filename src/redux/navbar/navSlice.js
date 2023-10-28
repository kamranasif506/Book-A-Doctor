import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  active: 'home',
};

const navSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const navActions = navSlice.actions;
export default navSlice;
