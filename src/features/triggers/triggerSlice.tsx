import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface TriggerState {
    triggerLoginAlert: boolean
}

const initialState = {
    triggerLoginAlert: true
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