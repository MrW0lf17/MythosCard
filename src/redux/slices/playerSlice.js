import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deck: JSON.parse(localStorage.getItem('playerDeck')) || [],
  gold: 0,
  element: '',
  // Add other player properties as needed
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updatePlayerDeck: (state, action) => {
      console.log('Updating player deck in Redux:', action.payload);
      state.deck = action.payload;
      localStorage.setItem('playerDeck', JSON.stringify(action.payload));
    },
    updatePlayerGold: (state, action) => {
      state.gold = action.payload;
    },
    updatePlayerStats: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updatePlayerDeck, updatePlayerGold, updatePlayerStats } = playerSlice.actions;
export default playerSlice.reducer;
