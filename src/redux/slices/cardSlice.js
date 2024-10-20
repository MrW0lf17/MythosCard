import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    allCards: [],
  },
  reducers: {
    setAllCards: (state, action) => {
      state.allCards = action.payload;
    },
  },
});

export const { setAllCards } = cardSlice.actions;
export default cardSlice.reducer;
