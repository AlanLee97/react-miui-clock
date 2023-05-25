import { createSlice } from '@reduxjs/toolkit';

const {
  reducer,
  actions,
} = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    add(state, action) {
      state.value += action.payload || 1;
    },
    sub(state, action) {
      state.value -= action.payload || 1;
    }
  }
});

export const {
  add,
  sub
} = actions;

export default reducer;
