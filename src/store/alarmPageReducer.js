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
    setAlarmData(state, action) {
      console.log('reducer setAlarmData');
      state.alarmData = action.payload;
    }
  }
});

export const {
  setAlarmData
} = actions;

export default reducer;
