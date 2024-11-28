import {configureStore} from "@reduxjs/toolkit";
import hotelSlice from "./hotelSlice";
import fetchstatus from "./fetchstatus";
import BookingSlice from "./BookingSlice";
import reviewSlice from "./review";



const hoteStore = configureStore({
    reducer:{
        hotelSlice:hotelSlice.reducer,
        fetchstatus:fetchstatus.reducer,
        BookingSlice:BookingSlice.reducer,
        reviewSlice:reviewSlice.reducer,
    }
});

export default hoteStore;