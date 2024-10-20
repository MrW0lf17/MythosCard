import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deck: [],
  gold: 0,
  stats: {},
  element: '',
  referralCode: null,
  friendsInvited: 0,
  referralRewards: 0,
  // ... other initial state properties ...
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updatePlayerDeck(state, action) {
      state.deck = action.payload;
    },
    updatePlayerGold(state, action) {
      state.gold = action.payload;
    },
    updatePlayerStats(state, action) {
      state.stats = { ...state.stats, ...action.payload };
    },
    setReferralCode(state, action) {
      state.referralCode = action.payload;
    },
    incrementFriendsInvited(state) {
      state.friendsInvited += 1;
    },
    addReferralReward(state, action) {
      state.referralRewards += action.payload;
    },
    // ... other reducers ...
  },
});

export const { 
  updatePlayerDeck, 
  updatePlayerGold, 
  updatePlayerStats, 
  setReferralCode,
  incrementFriendsInvited,
  addReferralReward
} = playerSlice.actions;

export default playerSlice.reducer;
