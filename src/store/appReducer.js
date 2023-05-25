import { createSlice } from '@reduxjs/toolkit';
import { AlarmPageData } from './applicationData';

const {
  reducer,
  actions,
} = createSlice({
  name: 'app',
  initialState: {
    tabIndex: 0,
    page: {
      alarmPage: {
        alarmData: AlarmPageData.alarmData,
        restData: AlarmPageData.restData
      }
    }
  },
  reducers: {
    setTabIndex(state, action) {
      state.tabIndex = action.payload || 0;
    }
  }
});

export const {
  setTabIndex
} = actions;

export default reducer;
