import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
    name:"review",
    initialState: [], 
    reducers:{
        display:(state,action)=>{
            return action.payload;
        },
        removedisplay:(state,action)=>{
            return state.filter(item => item !== action.payload);
        }

    }
});

export const reviewAction = reviewSlice.actions;
export default reviewSlice;