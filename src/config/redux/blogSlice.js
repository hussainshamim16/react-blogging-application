

import { createSlice } from "@reduxjs/toolkit"

export const bolgSlice = createSlice({
    name:"count",
    initialState:{
        count: 0
    },
    reducers:{
        add:(state)=>{
            state.count +=1
        },
        remove:(state)=>{
            state.count -=1
        }
    }
})

export const {add,remove} = bolgSlice.actions
export default bolgSlice.reducer