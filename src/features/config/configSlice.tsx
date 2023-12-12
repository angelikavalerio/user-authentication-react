import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

export interface ConfigState {
    authentication: {
        accessToken: string,
        refreshToken: string
    }
}

const initialState = {
    authentication: {
        accessToken: '',
        refreshToken: ''
    }
} as ConfigState

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        changeAccessToken: (state, action: PayloadAction<string>) => {
            state.authentication.accessToken = action.payload
        },
        changeRefreshToken: (state, action: PayloadAction<string>) => {
            state.authentication.refreshToken = action.payload
        },
        deleteTokens: state => {
            state.authentication = {
                accessToken: '',
                refreshToken: ''
            }
        }
    }
})

export const { changeAccessToken } = configSlice.actions

export const getAccessToken = (state: RootState) => state.config.authentication.accessToken

export default configSlice.reducer