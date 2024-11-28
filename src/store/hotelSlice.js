import {createSlice} from "@reduxjs/toolkit";
const hotelSlice = createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addtobooking:(state,action)=>{
            // console.log(action.payload)
            return action.payload;
        },
    }

});

export const hotelSliceAction = hotelSlice.actions;
export default hotelSlice;