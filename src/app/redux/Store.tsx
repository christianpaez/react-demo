import { configureStore } from '@reduxjs/toolkit'
import tickerReducer from './TickerSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    ticker: tickerReducer
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export default store
