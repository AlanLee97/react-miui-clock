import { createSlice } from '@reduxjs/toolkit';
import { ClockPageData } from './applicationData';

const {
  reducer,
  actions,
} = createSlice({
  name: 'clockPage',
  initialState: {
    clockList: ClockPageData.clockList,
  },
  reducers: {

  }
});

// export const {

// } = actions;

export default reducer;
