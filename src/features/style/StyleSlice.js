import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const styleSlice=createSlice({
    name:"styles",
    initialState:{
        showSetting:false,
        showSidebar:false,
        darkMode:false,
        sidebarColor:"primary",
        navbarFixed:false,
        sidenavBg:"bg-gradient-dark"
    },
    reducers:{
        toggleSetting:(state)=>{
            state.showSetting=!state.showSetting;
        },
        toggleDarkMode:(state,action)=>{
            state.darkMode=action.payload;
        },
        changeSidebarColor:(state,action)=>{
          state.sidebarColor=action.payload;
        },
        toggleNavbarFixed:(state)=>{
            state.navbarFixed=!state.navbarFixed;
        },
        changeSidenavBg:(state,action)=>{
             state.sidenavBg=action.payload
        }
    }
});
export const {toggleSetting,toggleDarkMode,changeSidebarColor,toggleNavbarFixed,changeSidenavBg}=styleSlice.actions;
export default styleSlice.reducer;