import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
import alarmPageReducer from './alarmPageReducer';
import clockPageReducer from './clockPageReducer';

export default configureStore({
  reducer: {
    app: appReducer,
    alarmPage: alarmPageReducer,
    clockPage: clockPageReducer,
  },
});
