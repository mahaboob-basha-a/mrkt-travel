import { configureStore } from "@reduxjs/toolkit";
import { initialSlice } from "./slice";

const store = configureStore({
    reducer:{
        travelerInfo: initialSlice.reducer
    }
})

export default store