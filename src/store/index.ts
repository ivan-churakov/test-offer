import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './features/slices/apiSlice'

export const store = configureStore({
    reducer: {
        api: apiReducer,
    },
})