export const selectPlayerHealth = (state) => state.game.playerHealth;
export const selectPlayerMaxHealth = (state) => state.game.playerMaxHealth;
export const selectPlayerMana = (state) => state.game.playerMana;
export const selectPlayerMaxMana = (state) => state.game.playerMaxMana;
export const selectAlertMessage = (state) => state.game.alertMessage;
export const selectBattleState = (state) => state.game.battleState;

export const selectPlayerName = (state) => state.player.name;
export const selectPlayerLevel = (state) => state.player.level;
export const selectPlayerExperience = (state) => state.player.experience;
export const selectPlayerCoins = (state) => state.player.coins;
export const selectPlayerStars = (state) => state.player.stars;
export const selectPlayerDeck = (state) => state.player.deck;
export const selectPlayerInventory = (state) => state.player.inventory;
