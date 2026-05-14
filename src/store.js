import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer:{
        counter : counterReducer,
        users : userReducer
    }
})

export default store;