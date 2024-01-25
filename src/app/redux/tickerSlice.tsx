import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios';

export interface TickerState {
    tickers: [];
    loading: boolean;
    error: string | null;

}

export interface TickerSlice {
    ticker: TickerState
    
}

export const fetchTickers = createAsyncThunk('ticker/fetchTickers', async (key: string) => {
    try {
        const apiUrl: string = process.env.REACT_APP_API_URL || ''
        const response = await axios.get(`${apiUrl}/tickers`, { params: { key } });
        return response.data;
    } catch (e) {
        const error = e as AxiosError
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
                .addCase(fetchTickers.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'An error occurred';
                });
        
    }
})

export default tickerSlice.reducer