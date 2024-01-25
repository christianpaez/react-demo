import { createSlice } from '@reduxjs/toolkit'

export interface TickerState {
    tickers: [];
    loading: boolean;
    error: string | null;

}

export interface TickerSlice {
    ticker: TickerState
    
}

export const tickerSlice = createSlice({
    name: 'ticker',
    initialState: {
        loading: false,
        error: null,
        tickers: [],
    } as TickerState,
    reducers: {
        getTickers: (state) => {
            state.loading = true
        },
    },
})

export const { getTickers } = tickerSlice.actions

export default tickerSlice.reducer