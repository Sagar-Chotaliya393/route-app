import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserdata = createAsyncThunk('users/fetchUserdata', async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data;
})

const userSlice = createSlice({
    name:"userlist",
    initialState:{ users:[], loading:true},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchUserdata.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchUserdata.fulfilled,(state,action) =>{
            state.loading = false;
            state.users = action.payload;
        })
    }
})

export default userSlice.reducer;