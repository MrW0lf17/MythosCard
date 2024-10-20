import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerHealth: 100,
  playerMaxHealth: 100,
  playerMana: 50,
  playerMaxMana: 50,
  alertMessage: null,
  battleState: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetBattleState: (state) => {
      state.battleState = null;
    },
    updatePlayerHealth: (state, action) => {
      state.playerHealth = action.payload;
    },
    updatePlayerMana: (state, action) => {
      state.playerMana = action.payload;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    clearAlertMessage: (state) => {
      state.alertMessage = null;
    },
  },
});

export const {
  resetBattleState,
  updatePlayerHealth,
  updatePlayerMana,
  setAlertMessage,
  clearAlertMessage,
} = gameSlice.actions;

export default gameSlice.reducer;
