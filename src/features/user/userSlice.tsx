import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface userState {
    firstName: string,
    username: string,
    email: string
}

const initialState = {
    firstName: 'sss',
    username: '',
    email: 'ssss'
} as userState

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload
        },
        changeUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    }
})

export const { changeFirstName, changeUsername, changeEmail } = userSlice.actions

export const getUser = (state: RootState) => state.user.email

export default userSlice.reducer