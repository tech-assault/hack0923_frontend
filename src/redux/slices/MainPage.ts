import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GraphType = 'demand' | 'quality';

type Filters = {
    shops: string,
    sku: string;
    group: string;
    category: string;
    subcategory: string;
    uom: number;
};

type InitialState = {
    graphType: GraphType;
    timeRange: {
        from: number;
        to: number;
    };
    isMallPopupVisible: boolean;
    filters: Filters;
};

const today = Date.now();
const twoWeeksFromToday = today + 13 * 24 * 60 * 60 * 1000; // 14 days

const isPopupClosed = localStorage.getItem('popupStatus') === 'closed';

const initialState: InitialState = {
    graphType: 'demand',
    timeRange: {
        from: today,
        to: twoWeeksFromToday,
    },
    isMallPopupVisible: !isPopupClosed,
    filters: {
        shops: '',
        sku: '',
        group: '',
        category: '',
        subcategory: '',
        uom: 0,
    },
};

export const slice = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {
        selectGraphType: (state, { payload }: PayloadAction<GraphType>) => {
            state.graphType = payload;
        },
        openMallPopup: (state) => {
            state.isMallPopupVisible = true;
        },
        closeMallPopup: (state) => {
            state.isMallPopupVisible = false;
            localStorage.setItem('popupStatus', 'closed');
        },
        setFilterData: (state, { payload }: PayloadAction<Filters>) => {
            state.filters = payload;
        },
        setShopsData: (state, { payload }: PayloadAction<string>) => {
            state.filters.shops = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { selectGraphType, openMallPopup, closeMallPopup, setFilterData, setShopsData } = slice.actions;

export default slice.reducer;
