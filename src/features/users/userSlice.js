import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {patch} from "../../utils/httpclient";
export const editProfile = createAsyncThunk(
  "user/editUserInfo",
  async (params, thunkAPI) => {
    const {userId, summary, location, mobile, fullName,avatar } = params;
   return await patch(`users/${userId}`,{summary, location, mobile, fullName,avatar });

  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    info: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      const usrInfo = action.payload;
      state.info = usrInfo;
      state.loading = false;
      Cookies.set("userInfo", JSON.stringify(usrInfo));
    },
    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logOut: (state) => {
      state.info = null;
      Cookies.remove("userInfo");
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(editProfile.pending,(state)=>{
    state.loading=true
    })
    .addCase(editProfile.fulfilled,(state,action)=>{
state.info=action.payload;
    state.loading=false
    })
    .addCase(editProfile.rejected,(state,action)=>{
    state.loading=false;
    state.error=action.payload;
    })
  }
});
export const { loginRequest, loginSuccess, loginError, logOut } =
  userSlice.actions;
export default userSlice.reducer;
