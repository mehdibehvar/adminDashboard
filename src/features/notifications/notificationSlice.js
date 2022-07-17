import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { del, get } from "../../utils/httpclient";

////create asyncthunk/////
export const fetchAllNotifications=createAsyncThunk(
    "notifications/fetchAllNotifications",
    async ()=>{
       const response= get("notifications");
       return response;
    }
)
export const deleteAlert=createAsyncThunk(
    "notifications/deleteAlert",
    async (id,thunkAPI)=>{
        del(`notifications/${id}`);
        return id;
    }
)
////create EntitiyAdapter/////////////////////////////////////////
const notificationsAdapter=createEntityAdapter({
    selectId:notification=>notification.id,
    sortComparer:(a,b)=>a.title.localeCompare(b.title)
})
const initialState=notificationsAdapter.getInitialState({status:"idle"})
export const {selectAll:selectAllNotifications}=notificationsAdapter.getSelectors(state=>state.notifications)
export const selectAlertsNotif=createSelector(
    selectAllNotifications,
    (allNotif)=>{
        const alerts=allNotif.filter(notif=>notif.type==="alert");
        const sortedAlerts=alerts.sort((a,b)=>b.time-a.time)
        return sortedAlerts;
    }
)
////createslice section ///////////////////////////////////////
const notificationSlice=createSlice({
    name:"notifications",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAllNotifications.pending,(state)=>{
            state.status="pending"
        })
        .addCase(fetchAllNotifications.fulfilled,(state,action)=>{
            notificationsAdapter.upsertMany(state,action.payload);
            state.status="success"
        })
        .addCase(fetchAllNotifications.rejected,(state)=>{
            state.status="rejected";
        })
        .addCase(deleteAlert.pending,(state)=>{
            state.status="pending"
        })
        .addCase(deleteAlert.fulfilled,(state,action)=>{
            state.status="success";
        })
        .addCase(deleteAlert.rejected,(state)=>{
            state.status="rejected"
        })
    }
})
export default notificationSlice.reducer;