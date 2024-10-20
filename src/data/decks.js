// src/data/decks.js

import { allCards, epicCards, assignElementToCard, uniqueBossAndMinionCards } from './cards';
import { v4 as uuidv4 } from 'uuid';

const getRandomCards = (cards, count) => {
  const shuffled = [...cards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const createMinionDeck = (element, commonCount, epicCount, powerMultiplier = 1, owner) => {
  const relevantCommonCards = allCards.filter(card => 
    card.rarity === 'Common' && (card.element === 'Neutral' || card.element === element)
  );
  const relevantEpicCards = epicCards.filter(card => card.element === element);
  const uniqueCard = uniqueBossAndMinionCards.find(card => card.owner === owner);

  const selectedCommon = getRandomCards(relevantCommonCards, commonCount);
  const selectedEpic = getRandomCards(relevantEpicCards, epicCount);

  const deck = [...selectedCommon, ...selectedEpic].map(card => {
    const modifiedCard = assignElementToCard({...card, id: uuidv4()}, element);
    modifiedCard.attackPower = Math.round(modifiedCard.attackPower * powerMultiplier);
    modifiedCard.defensePower = Math.round(modifiedCard.defensePower * powerMultiplier);
    return modifiedCard;
  });

  if (uniqueCard) {
    deck.push({...uniqueCard, id: uuidv4()});
  }

  // Ensure the deck has exactly 8 cards
  while (deck.length < 8) {
    const extraCommon = getRandomCards(relevantCommonCards, 1)[0];
    deck.push(assignElementToCard({...extraCommon, id: uuidv4()}, element));
  }

  return deck.slice(0, 8); // Ensure we return exactly 8 cards
};

const createBossDeck = (element, commonCount, epicCount, powerMultiplier = 1, owner) => {
  const relevantCommonCards = allCards.filter(card => 
    card.rarity === 'Common' && (card.element === 'Neutral' || card.element === element)
  );
  const relevantEpicCards = epicCards.filter(card => card.element === element);
  const uniqueCard = uniqueBossAndMinionCards.find(card => card.owner === owner);

  const selectedCommon = getRandomCards(relevantCommonCards, commonCount);
  const selectedEpic = getRandomCards(relevantEpicCards, epicCount);

  const deck = [...selectedCommon, ...selectedEpic].map(card => {
    const modifiedCard = assignElementToCard({...card, id: uuidv4()}, element);
    modifiedCard.attackPower = Math.round(modifiedCard.attackPower * powerMultiplier);
    modifiedCard.defensePower = Math.round(modifiedCard.defensePower * powerMultiplier);
    return modifiedCard;
  });

  if (uniqueCard) {
    deck.push({...uniqueCard, id: uuidv4()});
  }

  // Ensure the deck has exactly 8 cards
  while (deck.length < 8) {
    const extraCommon = getRandomCards(relevantCommonCards, 1)[0];
    deck.push(assignElementToCard({...extraCommon, id: uuidv4()}, element));
  }

  const finalDeck = deck.slice(0, 8); // Ensure we return exactly 8 cards

  // Add the reward epic card
  const rewardEpic = getRandomCards(relevantEpicCards.filter(card => !finalDeck.includes(card)), 1)[0];
  const rewardCard = {...rewardEpic, id: uuidv4(), isReward: true};

  return { deck: finalDeck, rewardCard };
};

export const minionDecks = {
  // Ra's minions
  'Fire Imp': createMinionDeck('Fire', 6, 1, 0.5, 'Fire Imp'),
  'Flame Wraith': createMinionDeck('Fire', 6, 1, 0.8, 'Flame Wraith'),
  'Fire Elemental': createMinionDeck('Fire', 6, 1, 1.2, 'Fire Elemental'),
  'Inferno Guardian': createMinionDeck('Fire', 6, 1, 1.5, 'Inferno Guardian'),

  // Zephyr's minions
  'Wind Sprite': createMinionDeck('Air', 6, 1, 0.5, 'Wind Sprite'),
  'Storm Elemental': createMinionDeck('Air', 6, 1, 0.8, 'Storm Elemental'),
  'Gale Wraith': createMinionDeck('Air', 6, 1, 1.2, 'Gale Wraith'),
  'Tempest Guardian': createMinionDeck('Air', 6, 1, 1.5, 'Tempest Guardian'),

  // Geb's minions
  'Stone Golem': createMinionDeck('Earth', 6, 1, 0.5, 'Stone Golem'),
  'Boulder Beast': createMinionDeck('Earth', 6, 1, 0.8, 'Boulder Beast'),
  'Crystal Colossus': createMinionDeck('Earth', 6, 1, 1.2, 'Crystal Colossus'),
  'Mountain Titan': createMinionDeck('Earth', 6, 1, 1.5, 'Mountain Titan'),

  // Nephthys' minions
  'Water Sprite': createMinionDeck('Water', 6, 1, 0.5, 'Water Sprite'),
  'Tidal Elemental': createMinionDeck('Water', 6, 1, 0.8, 'Tidal Elemental'),
  'Whirlpool Wraith': createMinionDeck('Water', 6, 1, 1.2, 'Whirlpool Wraith'),
  'Tsunami Titan': createMinionDeck('Water', 6, 1, 1.5, 'Tsunami Titan'),

  // Thoth's minions
  'Wisp': createMinionDeck('Spirit', 6, 1, 0.5, 'Wisp'),
  'Phantom': createMinionDeck('Spirit', 6, 1, 0.8, 'Phantom'),
  'Banshee': createMinionDeck('Spirit', 6, 1, 1.2, 'Banshee'),
  'Ethereal Lord': createMinionDeck('Spirit', 6, 1, 1.5, 'Ethereal Lord'),

  // Set's minions
  'Shadow Lurker': createMinionDeck('Darkness', 6, 1, 0.5, 'Shadow Lurker'),
  'Void Stalker': createMinionDeck('Darkness', 6, 1, 0.8, 'Void Stalker'),
  'Nightmare Beast': createMinionDeck('Darkness', 6, 1, 1.2, 'Nightmare Beast'),
  'Abyssal Horror': createMinionDeck('Darkness', 6, 1, 1.5, 'Abyssal Horror'),

  // Isis' minions
  'Sapling Sprite': createMinionDeck('Life', 6, 1, 0.5, 'Sapling Sprite'),
  'Bloom Guardian': createMinionDeck('Life', 6, 1, 0.8, 'Bloom Guardian'),
  'Nature\'s Warden': createMinionDeck('Life', 6, 1, 1.2, 'Nature\'s Warden'),
  'Ancient Treant': createMinionDeck('Life', 6, 1, 1.5, 'Ancient Treant'),
};

export const bossDecks = {
  'Ra': createBossDeck('Fire', 5, 2, 2, 'Ra'),
  'Zephyr': createBossDeck('Air', 5, 2, 2, 'Zephyr'),
  'Geb': createBossDeck('Earth', 5, 2, 2, 'Geb'),
  'Nephthys': createBossDeck('Water', 5, 2, 2, 'Nephthys'),
  'Thoth': createBossDeck('Spirit', 5, 2, 2, 'Thoth'),
  'Set': createBossDeck('Darkness', 5, 2, 2, 'Set'),
  'Isis': createBossDeck('Life', 5, 2, 2, 'Isis'),
};

export const getDeck = (name) => {
  if (minionDecks[name]) {
    return minionDecks[name];
  } else if (bossDecks[name]) {
    return bossDecks[name].deck;
  }
  return null;
};

export const getBossRewardCard = (bossName) => {
  return bossDecks[bossName] ? bossDecks[bossName].rewardCard : null;
};
