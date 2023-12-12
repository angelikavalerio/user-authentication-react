import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
import configReducer from "../features/config/configSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        config: configReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch