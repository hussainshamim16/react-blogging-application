import { configureStore } from "@reduxjs/toolkit"
import countReducer from '../redux/blogSlice'




export const store = configureStore({
    reducer: {
        count: countReducer
    }
})