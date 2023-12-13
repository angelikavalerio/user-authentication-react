import { configureStore } from "@reduxjs/toolkit"
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'
import configReducer from "../features/config/configSlice"
import triggerReducer from "../features/triggers/triggerSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        config: configReducer,
        trigger: triggerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch