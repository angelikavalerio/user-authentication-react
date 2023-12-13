import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

export interface ConfigState {
    authentication: {
        accessToken: string,
        refreshToken: string
    },
    isAuthenticated: boolean
}

const initialState = {
    authentication: {
        accessToken: '',
        refreshToken: ''
    },
    isAuthenticated: false
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
export const selectIsAuthenticated = (state: RootState) => state.config.isAuthenticated

export default configSlice.reducer