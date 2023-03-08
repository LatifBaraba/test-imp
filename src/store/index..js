import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './post'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
