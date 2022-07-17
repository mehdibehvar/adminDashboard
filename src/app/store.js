import { configureStore } from '@reduxjs/toolkit';
import authorSlice from '../features/authors/authorSlice';
import billingSlice from '../features/billingInfo/billingInfoSlice';
import cardSlice from '../features/cards/cardSlice';
import chartsSlice from '../features/charts/chartsSlice';
import filterSlice from '../features/filter/filterSlice';
import notificationSlice from '../features/notifications/notificationSlice';
import projectSlice from '../features/projects/projectSlice';
import styleSlice from '../features/style/StyleSlice';
import userSlice from '../features/users/userSlice';
export const store = configureStore({
  reducer: {
 projects:projectSlice,
 userInfo:userSlice,
 authors:authorSlice,
 cards:cardSlice,
 billings:billingSlice,
 filters:filterSlice,
 styles:styleSlice,
 charts:chartsSlice,
 notifications:notificationSlice
  },
});
