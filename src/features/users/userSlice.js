import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie"


const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        error:null,
        info:Cookies.get("userInfo")?JSON.parse(Cookies.get("userInfo")):null
    },
    reducers:{
        loginRequest:(state)=>{
            state.loading=true;
        },
        loginSuccess:(state,action)=>{
            const usrInfo=action.payload;
            state.info=usrInfo;
            state.loading=false;
            Cookies.set("userInfo",JSON.stringify(usrInfo))
        },
        loginError:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        logOut:(state)=>{
         state.info=null;
         Cookies.remove("userInfo");
        }
    },
});
export const {loginRequest,loginSuccess,loginError,logOut}=userSlice.actions;
export default userSlice.reducer;