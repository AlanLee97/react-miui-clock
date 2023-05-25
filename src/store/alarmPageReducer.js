import { createSlice } from '@reduxjs/toolkit';
import { AlarmPageData } from './applicationData';

const {
  reducer,
  actions,
} = createSlice({
  name: 'alarmPage',
  initialState: {
    alarmData: AlarmPageData.alarmData,
    restData: AlarmPageData.restData
  },
  reducers: {

  }
});

// export const {

// } = actions;

export default reducer;
