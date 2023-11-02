import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import config from '../../config';

const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null
}

const loginURl = `${config.apiBaseUrl}${config.loginEndpoint}`;
export const LoginAuth = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(loginURl,data)
            console.log(response);
            const user = response.data.user; 
            const token = response.headers['authorization']; 
            localStorage.setItem('token', token);

            return { user, token };
        } catch (error) {
            throw thunkAPI.rejectWithValue(error);
        }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(LoginAuth.pending, (state,action) => {
                state.status = 'pending'
            })
            .addCase(LoginAuth.fulfilled, (state, action) => {
                state.user = action.payload.data
                state.token = action.payload.token
                state.status = action.payload.status.message
            })
            .addCase(LoginAuth.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default authSlice.reducer;