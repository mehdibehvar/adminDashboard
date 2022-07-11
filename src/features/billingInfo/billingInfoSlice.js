import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { get } from "../../utils/httpclient";

export const fetchBillingInfo=createAsyncThunk(
    "billingInfo/fetchBillingInfo",
    async ()=>{
        return await get("billing")
    }
);
const billingAdapter=createEntityAdapter();
const initialState=billingAdapter.getInitialState({status:"idle"});
export const {selectAll:selectAllBilling}=billingAdapter.getSelectors(state=>state.billings);
const billingSlice=createSlice({
    name:"billings",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBillingInfo.pending,(state)=>{
            state.status="pending"
        })
        .addCase(fetchBillingInfo.fulfilled,(state,action)=>{
            billingAdapter.upsertMany(state,action.payload);
            state.status="success"
        })
        .addCase(fetchBillingInfo.rejected,(state,action)=>{
            state.status="rejected"
        })
    }
})
export default billingSlice.reducer;