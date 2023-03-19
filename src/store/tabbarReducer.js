import { createSlice } from '@reduxjs/toolkit';

export const tabbarSlice = createSlice({
  name: 'tabbar',
  initialState: {
    currentIndex: 0
  },
  reducers: {
    setTabbarIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  }
})

export const {
  setTabbarIndex
} = tabbarSlice.actions;

export default tabbarSlice.reducer;