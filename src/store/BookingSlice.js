import {createSlice} from "@reduxjs/toolkit";
const BookingSlice = createSlice({
    name:"BookingSlice",
    initialState:[],
    reducers:{
        addtobook:(state,action)=>{
            // console.log(action.payload);
            state.push(action.payload);
            // {chech ? console.log(true):console.log(false)}
        },
        deletetobook:(state,action)=>{
            return state.filter(item => item !== action.payload);
        },  
    },
});
export const BookingSliceAction = BookingSlice.actions;
export default BookingSlice;