import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GraphType = 'demand' | 'quality';

type InitialState = {
    graphType: GraphType,
    timeRange: {
        from: Date,
        to: Date,
    },
    isMallPopupVisible: boolean
}

const today = new Date();
const twoWeeksFromNow = new Date();
twoWeeksFromNow.setDate(today.getDate() + 14);

const initialState: InitialState = {
    graphType: 'demand',
    timeRange: {
        from: today,
        to: twoWeeksFromNow,
    },
    isMallPopupVisible: true
}

export const slice = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {
        selectGraphType: (state, { payload }: PayloadAction<GraphType>) => {
            state.graphType = payload
        },
        openMallPopup: (state) => {
            state.isMallPopupVisible = true;
        },
        closeMallPopup: (state) => {
            state.isMallPopupVisible = false;
        }
    },
})

// Action creators are generated for each case reducer function
export const { selectGraphType, openMallPopup, closeMallPopup } = slice.actions

export default slice.reducer