import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { get, patch } from "../../utils/httpclient/HttpClient";
/////create asyncthunk///
export const fetchProjects = createAsyncThunk(
  "projects/fetchprojects",
  async () => {
    // throw new Error("something went wrong")
    const response = await get("projects");
    return response;
  }
);
export const changeStatus=createAsyncThunk(
  "projects/changeProjectStatus",
  async ({projectId,newStatus,newCompletion},thunkAPI)=>{
     return await patch(`projects/${projectId}`,{
      status:newStatus,
      completion:newCompletion
    });
  }
)
/////createEntity Adapter////////
const projectsAdapter = createEntityAdapter({
  selectId: (project) => project.id,
  sortComparer: (a, b) => a.id - b.id,
});
export const { selectAll: selectAllProjects,selectById:selectprojectById} = projectsAdapter.getSelectors(
  (state) => state.projects
);
export const selectProjectsByIds = createSelector(
  selectAllProjects,
  (state, userProjectIds) => userProjectIds,
  (Allprojects, userProjectIds) => {
    return Allprojects.filter((project) => userProjectIds.includes(project.id));
  }
);

const initialState = projectsAdapter.getInitialState({
  status: "idle",
});
////create slice////////////////////////////
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        projectsAdapter.upsertMany(state, action.payload);
        state.status = "success";
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(changeStatus.pending,(state,action)=>{
        state.status="pending";
      })
      .addCase(changeStatus.fulfilled,(state,action)=>{
        const {id,status,completion}=action.payload;
        state.entities[id].status=status;
        state.entities[id].completion=completion
      })
      .addCase(changeStatus.rejected,(state)=>{
        state.status="rejected";
      })
  },
});
export default projectsSlice.reducer;
////create a selector for filtered projects///
const filters=state=>state.filters;
const selectFilteredProjects=createSelector(
    selectAllProjects,
    filters,
    (AllProjects,{status})=>{
        if(status==="Show All"){
            return AllProjects;
        }
        if(status==="ascending progress"){
            ////In case you want sort() to not mutate the original array, 
            ///but return a shallow-copied array like other array methods (e.g. map()) do,
            /// you can do a shallow copy before calling sort(), 
            //using the spread syntax or Array.from().
            const ascendingProjects=[...AllProjects].sort((a,b)=>b.completion-a.completion);
            return ascendingProjects;
           }
        if(status==="show completed"){
          const completedProjects=AllProjects.filter(project=>project.completion===100);
          return completedProjects;
        }
     
        if(status==="descending progress"){
            const descendingProjects=[...AllProjects].sort((a,b)=>a.completion-b.completion);
            return descendingProjects;
        }
    }
)
export const selectFilteredProjectsIds=createSelector(
    selectFilteredProjects,
    (FilteredProjects)=>{
       const FilteredIds=FilteredProjects.map(project=>project.id);
       return FilteredIds;
    }
)