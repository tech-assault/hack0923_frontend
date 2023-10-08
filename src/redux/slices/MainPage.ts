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

const initialState: InitialState = {
    graphType: 'demand',
    timeRange: {
        from: new Date,
        to: new Date,
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