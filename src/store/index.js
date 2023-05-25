import { configureStore } from '@reduxjs/toolkit';
import tabbarReducer from './tabbarReducer';

export default configureStore({
  reducer: {
    tabbar: tabbarReducer,
  },
});
