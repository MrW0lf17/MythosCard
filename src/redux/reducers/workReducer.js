import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isWorking: false,
  startTime: null,
  totalTime: 0,
  timeLeft: 0,
  // ... other initial state properties ...
};

const workSlice = createSlice({
  name: 'work',
  initialState,
  reducers: {
    START_WORK(state, action) {
      state.isWorking = true;
      state.startTime = action.payload.startTime;
      state.totalTime = action.payload.totalTime;
      state.timeLeft = action.payload.totalTime;
    },
    END_WORK(state) {
      state.isWorking = false;
      state.startTime = null;
      state.totalTime = 0;
      state.timeLeft = 0;
    },
    UPDATE_WORK_TIME(state, action) {
      state.timeLeft = action.payload;
    },
    // ... other reducers ...
  },
});

export const { START_WORK, END_WORK, UPDATE_WORK_TIME } = workSlice.actions;
export default workSlice.reducer;
