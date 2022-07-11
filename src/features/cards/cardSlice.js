import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../utils/httpclient";

export const fetchCards=createAsyncThunk(
    "cards/fetchCards",
    async (params,thunkAPI)=>{
        const response=await get("cards");
        return response;
    }
);
const cardSlice=createSlice({
    name:"cards",
    initialState:{status:"idle"},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCards.pending,(state,action)=>{
            state.status="pending"
        })
        .addCase(fetchCards.fulfilled,(state,action)=>{
            state.cards=action.payload;
            state.status="success"
        })
        .addCase(fetchCards.rejected,(state,action)=>{
            state.status="rejected"
        })
    }
});
export default cardSlice.reducer;