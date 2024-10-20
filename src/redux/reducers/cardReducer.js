import { createSlice } from '@reduxjs/toolkit';
import { allCards } from '../../data/cards'; // Ensure this path is correct

const initialState = {
  allCards: allCards || [], // Initialize with existing cards or an empty array
};

console.log('Card Reducer Initialized with state:', initialState);

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setAllCards(state, action) {
      state.allCards = action.payload;
    },
    // Add more reducers as needed
  },
});

export const { setAllCards } = cardSlice.actions;
export default cardSlice.reducer;
