import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStores } from '../thunks/shopsThunks';


type Store = {
    store: string;
    city: string;
    division: string;
    type_format: number;
    loc: number;
    size: number;
    is_active: boolean;
};

type StoresState = {
    stores: Store[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
};

// Начальное состояние
const initialState: StoresState = {
    stores: [],
    loading: 'idle',
};

const storesSlice = createSlice({
    name: 'stores',
    initialState,
    reducers: {
        fetchStoresSuccess: (state, action: PayloadAction<Store[]>) => {
            state.stores = action.payload;
            state.loading = 'succeeded';
        },
    },
    extraReducers: builder => {
    
        builder.addCase(fetchStores.fulfilled, (state, action) => {
            state.stores = action.payload;
            state.loading = 'succeeded';
        });
    }
});



export const { fetchStoresSuccess } = storesSlice.actions;
export default storesSlice.reducer;
