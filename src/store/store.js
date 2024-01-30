import { configureStore } from "@reduxjs/toolkit"
import somethingsReducer from "../features/somethings/somethingsSlice"

export const store = configureStore({
    reducer:{
        somethings: somethingsReducer,
    }
})