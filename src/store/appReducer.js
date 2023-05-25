import { createSlice } from '@reduxjs/toolkit';

const {
  reducer,
  actions,
} = createSlice({
  name: 'app',
  initialState: {
    tabIndex: 0
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
