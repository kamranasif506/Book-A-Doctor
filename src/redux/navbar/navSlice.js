import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  active: 'home',
};

const navSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const navActions = navSlice.actions;
export default navSlice;
