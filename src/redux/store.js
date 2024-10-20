import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './reducers/playerReducer';
import workReducer from './reducers/workReducer';
import cardReducer from './reducers/cardReducer';

const store = configureStore({
  reducer: {
    player: playerReducer,
    work: workReducer,
    cards: cardReducer, // Ensure this key matches useSelector
  },
  // Removed preloadedState to rely on reducers' initialState
});

// Log the initial state to verify all slices are present
console.log('Redux Store Initialized:', store.getState());

export default store;
