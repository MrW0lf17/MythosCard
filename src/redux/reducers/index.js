import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import workReducer from './workReducer';

const rootReducer = combineReducers({
  player: playerReducer,
  work: workReducer,
  // ... other reducers
});

export default rootReducer;
