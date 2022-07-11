import { createSlice } from "@reduxjs/toolkit";

const styleSlice=createSlice({
    name:"styles",
    initialState:{
        showSetting:false,
        showSidebar:false,
    },
    reducers:{
        toggleSetting:(state)=>{
            state.showSetting=!state.showSetting;
        },
    }
});
export const {toggleSetting}=styleSlice.actions;
export default styleSlice.reducer;