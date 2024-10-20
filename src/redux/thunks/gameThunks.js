import { setAlertMessage, clearAlertMessage } from '../slices/gameSlice';

export const showAlertMessage = (message, duration = 3000) => (dispatch) => {
  dispatch(setAlertMessage(message));
  setTimeout(() => {
    dispatch(clearAlertMessage());
  }, duration);
};

// Add more thunks as needed for game logic
