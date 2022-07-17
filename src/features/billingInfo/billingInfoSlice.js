import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { del, get, patch } from "../../utils/httpclient";

export const fetchBillingInfo=createAsyncThunk(
    "billingInfo/fetchBillingInfo",
    async ()=>{
        return await get("billing")
    }
);
export const deleteBilling=createAsyncThunk(
    "billingInfo/deleteBilling",
    async (id,thunkAPI)=>{
    await del(`billing/${id}`);
        return id;
    }
);
export const editBilling=createAsyncThunk(
  "billing/editBilling",
  async (params,thunkAPI)=>{
    const {CompanyName,fullName,EmailAddress,id}=params
     patch(`billing/${id}`,{CompanyName,fullName,EmailAddress});
     return{id,changes:{CompanyName,fullName,EmailAddress}}
  }  
)
const billingAdapter=createEntityAdapter();
const initialState=billingAdapter.getInitialState({status:"idle",trigredId:null});
export const {selectAll:selectAllBilling,selectById:selectBillingById,selectIds:selectAllBillingsIds}=billingAdapter.getSelectors(state=>state.billings);
const billingSlice=createSlice({
    name:"billings",
    initialState,
    reducers:{
        saveTrigredBillingId:(state,action)=>{
            state.trigredId=action.payload;
        }
    },
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
        .addCase(deleteBilling.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(deleteBilling.fulfilled,(state,action)=>{
            billingAdapter.removeOne(state,action.payload)
            state.status="success";
        })
        .addCase(deleteBilling.rejected,(state,action)=>{
            state.status="rejected";
        })
        .addCase(editBilling.pending,(state)=>{
            state.status="pending";
        })
        .addCase(editBilling.fulfilled,(state,action)=>{
        billingAdapter.updateOne(state,action.payload);
            state.status="success";
        })
        .addCase(editBilling.rejected,(state)=>{
            state.status="rejected";
        })
    }
})
export const {saveTrigredBillingId}=billingSlice.actions;
export default billingSlice.reducer;