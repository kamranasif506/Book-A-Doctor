import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null
}

const loginURl = 'http://127.0.0.1:4000/login'
export const LoginAuth = createAsyncThunk(
    'auth/login',
    async (credentials) => {
        try {
            const response = await fetch(loginURl)
            const user = response.data.user; 
            const token = response.headers['authorization']; 
            localStorage.setItem('token', token);

            return { user, token };
        } catch (error) {
            throw error;
        }
})