import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';
import { apiUrl } from './constants';
import { TickerState } from './types';

export const fetchTickers = createAsyncThunk('ticker/fetchTickers', async (key: string) => {
    try {
        const response = await axios.get(`${apiUrl}/tickers`, { params: { key } });
        return response.data;
    } catch (e) {
        const error = e as AxiosError
        throw error.response ? error.response.data : error.message;
    }
});

export const fetchTickersError = createAsyncThunk('ticker/fetchTickers', async () => {
    try {
        const response = await axios.get(`${apiUrl}/invalid`);
        return response.data;
    } catch (e) {
        const error = e as AxiosError
        console.log(error.response?.data)
        throw error.response ? error.response.data : error.message;
    }
});

const initialState = {
    loading: false,
    error: null,
    tickers: [],
} as TickerState

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchTickers.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchTickers.fulfilled, (state, action) => {
                    state.loading = false;
                    state.tickers = action.payload;
                })
                .addCase(fetchTickers.rejected, (state) => {
                    state.loading = false;
                    state.error = 'An error occurred!';
                });
        
    }
})

export default tickerSlice.reducer