import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../utils/httpclient";
export const fetchChartsData=createAsyncThunk(
    "charts/fetchChartsData",
   async ()=>{
 return await get("charts");
})
const chartsSlice=createSlice({
    name:"charts",
    initialState:{
       chartsData:[],
        status:"idel"
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchChartsData.pending,(state)=>{
            state.status="pending"
        })
        .addCase(fetchChartsData.fulfilled,(state,action)=>{
            state.chartsData=[...action.payload]
            state.status="success";
        })
        .addCase(fetchChartsData.rejected,(state)=>{
            state.status="rejected"
        })
    }
});
export default chartsSlice.reducer;