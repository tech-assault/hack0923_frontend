import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GraphType = 'demand' | 'quality';

type InitialState = {
    graphType: GraphType,
    timeRange: {
        from: number,
        to: number,
    },
    isMallPopupVisible: boolean
}

const today = Date.now();
const twoWeeksFromToday = today + 14 * 24 * 60 * 60 * 1000 //14 days

const initialState: InitialState = {
    graphType: 'demand',
    timeRange: {
        from: today,
        to: twoWeeksFromToday,
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