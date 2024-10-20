export const updatePlayerDeck = (deck) => ({
  type: 'UPDATE_PLAYER_DECK',
  payload: deck,
});

export const updatePlayerGold = (gold) => ({
  type: 'UPDATE_PLAYER_GOLD',
  payload: gold,
});

export const updatePlayerStats = (stats) => ({
  type: 'UPDATE_PLAYER_STATS',
  payload: stats,
});
