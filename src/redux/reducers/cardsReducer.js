const initialState = {
  allCards: [], // This will be populated with all available cards
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_CARDS':
      return {
        ...state,
        allCards: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
