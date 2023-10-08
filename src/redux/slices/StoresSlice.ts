import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStores } from '../thunks/storesThunks';


type Store = {
    id: string;
    name: string;
    city: string;
};

type StoresState = {
    stores: Store[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
};

// Начальное состояние
const initialState: StoresState = {
    stores: [],
    loading: 'idle',
    error: null
};

const storesSlice = createSlice({
    name: 'stores',
    initialState,
    reducers: {
        fetchStoresPending: (state) => {
            state.loading = 'pending';
        },
        fetchStoresSuccess: (state, action: PayloadAction<Store[]>) => {
            state.stores = action.payload;
            state.loading = 'succeeded';
        },
        fetchStoresError: (state, action: PayloadAction<string>) => {
            state.loading = 'failed';
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchStores.pending, (state) => {
            state.loading = 'pending';
        });
    
        builder.addCase(fetchStores.fulfilled, (state, action) => {
            state.stores = action.payload;
            state.loading = 'succeeded';
            state.error = null;
        });
    
        builder.addCase(fetchStores.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error?.message || null;
        });
    }
});



export const { fetchStoresPending, fetchStoresSuccess, fetchStoresError } = storesSlice.actions;
export default storesSlice.reducer;
