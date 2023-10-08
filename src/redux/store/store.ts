import { configureStore } from '@reduxjs/toolkit'
import MainPage from '../slices/MainPage'
import shopsReducer from '../slices/ShopsSlice';

export const store = configureStore({
  reducer: {
    MainPage: MainPage,
    shops: shopsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch