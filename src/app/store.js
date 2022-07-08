import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/projects/projectSlice';
import userSlice from '../features/users/userSlice';
export const store = configureStore({
  reducer: {
 projects:projectSlice,
 userInfo:userSlice
  },
});
