import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { UnknownAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export interface TriggerState {
    triggerLoginAlert: boolean
}

const initialState = {
    triggerLoginAlert: false
} as TriggerState

export const triggerSlice = createSlice({
    name: 'trigger',
    initialState,
    reducers: {
        setLoginPrompt: (state, action: PayloadAction<boolean>) => {
            state.triggerLoginAlert = action.payload
        }
    }
})

export const { setLoginPrompt } = triggerSlice.actions

export const selectTriggerLoginAlert = (state: RootState) => state.trigger.triggerLoginAlert

export default triggerSlice.reducer
