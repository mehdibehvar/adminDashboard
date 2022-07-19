import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { get, patch } from "../../utils/httpclient/HttpClient";

export const fetchConversations=createAsyncThunk(
    "conversations/fetchConversations",
    async ()=>{
        const response=get("conversations");
        return response;
    }
);
export const sendReplay=createAsyncThunk(
    "conversations/sendReplay",
    async (params,thunkAPI)=>{
       const response=await patch(`conversations/${params.id}`,{replay:params.text})
      return{id:params.id,changes:response};
    }
)
const conversationsAdapter=createEntityAdapter({
    selectId:conv=>conv.id,
    sortComparer:(a,b)=>a.date-b.date
});
const initialState=conversationsAdapter.getInitialState({status:"idle",replayTo:''});
export const {selectAll:selectAllConversations,selectById:selectConvById}=conversationsAdapter.getSelectors(state=>state.conversations)
const conversationSlice=createSlice({
    name:"conversations",
    initialState,
    reducers:{
        replayConversation:(state,action)=>{
            state.replayTo=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchConversations.pending,(state,action)=>{
            state.status="pending"
        })
        .addCase(fetchConversations.fulfilled,(state,action)=>{
            conversationsAdapter.upsertMany(state,action.payload);
            state.status="success"
        })
        .addCase(fetchConversations.rejected,(state)=>{
           state.status="reject";
        })
        .addCase(sendReplay.pending,(state)=>{
            state.status="pending"
        })
        .addCase(sendReplay.fulfilled,(state,action)=>{
            conversationsAdapter.updateOne(state,action.payload);
            state.status="success";
        })
    }
});
export const {replayConversation}=conversationSlice.actions;
export default conversationSlice.reducer;