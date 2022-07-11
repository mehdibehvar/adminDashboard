import { createSlice } from "@reduxjs/toolkit";
const initialState={
    status:"Show All",
}
const filterSlice=createSlice({
    name:"filter",
    initialState,
    reducers:{
        ChangeFilterStatus:(state,action)=>{
            state.status=action.payload
        }
    }

});
export const {ChangeFilterStatus}=filterSlice.actions;
export default filterSlice.reducer;