import { configureStore } from '@reduxjs/toolkit';
import tabbarReducer from './tabbarReducer';
import counterReducer from './countReducer';

export default configureStore({
  reducer: {
    tabbar: tabbarReducer,
    counter: counterReducer,
  },
});
