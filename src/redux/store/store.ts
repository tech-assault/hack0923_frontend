import { configureStore } from '@reduxjs/toolkit'
import MainPage from '../slices/MainPage'
import storesReducer from '../slices/StoresSlice';

export const store = configureStore({
  reducer: {
    MainPage: MainPage,
    stores: storesReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch