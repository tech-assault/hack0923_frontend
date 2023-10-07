import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GraphType = 'demand' | 'quality';

type InitialState = {
    graphType: GraphType,
    timeRange: {
        from: Date,
        to: Date,
    }
}

const initialState: InitialState = {
    graphType: 'demand',
    timeRange: {
        from: new Date,
        to: new Date,
    }
}

export const slice = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {
        selectGraphType: (state, { payload }: PayloadAction<GraphType>) => {
            state.graphType = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { selectGraphType } = slice.actions

export default slice.reducer