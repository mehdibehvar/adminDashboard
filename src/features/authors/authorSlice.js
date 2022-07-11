import {createEntityAdapter, createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { get } from "../../utils/httpclient";

export const fetchAuthors=createAsyncThunk(
    "author/fetchAllAuthors",
    async (params,thunkAPI)=>{
        const response=await get("authors");
        return response;
    }
)
const authorAdapter=createEntityAdapter();
const initialState=authorAdapter.getInitialState({status:"idle"});
export const {selectAll:selectAllAuthors}=authorAdapter.getSelectors(state=>state.authors);
const authorSlice=createSlice({
    name:"author",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAuthors.pending,(state,action)=>{
            state.status="pending"
        })
        .addCase(fetchAuthors.fulfilled,(state,action)=>{
            authorAdapter.upsertMany(state,action.payload);
            state.status="success";
        })
        .addCase(fetchAuthors.rejected,(state,action)=>{
            state.status="error";
        })
    }
});
export default authorSlice.reducer;