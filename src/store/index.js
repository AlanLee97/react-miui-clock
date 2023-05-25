import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
import tabbarReducer from './tabbarReducer';
import counterReducer from './countReducer';

export default configureStore({
  reducer: {
    tabbar: tabbarReducer,
    app: appReducer,
    counter: counterReducer,
  },
});
