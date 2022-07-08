import {createEntityAdapter, createSlice,createAsyncThunk,createSelector } from "@reduxjs/toolkit";
import { get } from "../../utils/httpclient/HttpClient";
export const fetchProjects=createAsyncThunk(
    'projects/fetchprojects',
    async ()=>{
        const response=await get("projects");
        return response;
    }
)
const projectsAdapter=createEntityAdapter({
    selectId:project=>project.id,
    sortComparer:(a,b)=>a.id-b.id
});
export const {selectAll:selectAllProjects}=projectsAdapter.getSelectors(state=>state.projects);
export const selectProjectsByIds=createSelector(
    selectAllProjects,
    (state,userProjectIds)=>userProjectIds,
    (Allprojects,userProjectIds)=>{
        return Allprojects.filter(project=>userProjectIds.includes(project.id))
    }
)
const initialState=projectsAdapter.getInitialState({
    status:"idle"
});
const projectsSlice=createSlice(
    {
        name:"projects",
        initialState,
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(fetchProjects.pending,(state,action)=>{
                state.status="pending"
            })
            .addCase(fetchProjects.fulfilled,(state,action)=>{
                projectsAdapter.upsertMany(state,action.payload);
                state.status="success"
            })
           .addCase(fetchProjects.rejected,(state,action)=>{
            state.status="rejected"
           })
        }
    }
);
export default projectsSlice.reducer;