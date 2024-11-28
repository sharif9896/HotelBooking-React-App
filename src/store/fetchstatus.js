import {createSlice} from "@reduxjs/toolkit";
const fetchstatus = createSlice({
    name:"fetchstatus",
    initialState:{
        fetchDone: false,
        currentlyfetching: false,
    },
    reducers:{
        markfetchDone:(state)=>{
            state.fetchDone = true;
        },
        markfetchstarted:(state)=>{
            state.currentlyfetching = true;
        },
        markfetchended:(state)=>{
            state.currentlyfetching = false;
        }
    }
});

export const fetchAction = fetchstatus.actions;
export default fetchstatus;
