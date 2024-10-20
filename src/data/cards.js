// src/data/cards.js

// Common Cards (Expanded)
const commonHandToHandCards = [
  { name: "Pharaoh's Fist", manaCost: 1, attackPower: 3, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Sphinx Riddle Stance", manaCost: 2, attackPower: 0, defensePower: 4, type: "Defense", rarity: "Common", element: "Neutral" },
  { name: "Mummy's Grasp", manaCost: 2, attackPower: 5, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Scarab Shield", manaCost: 3, attackPower: 0, defensePower: 7, type: "Defense", rarity: "Common", element: "Neutral" },
  { name: "Anubis Jab", manaCost: 3, attackPower: 8, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Cobra Strike", manaCost: 4, attackPower: 10, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Nile Wrestler Throw", manaCost: 4, attackPower: 9, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Hieroglyph Stance", manaCost: 5, attackPower: 0, defensePower: 12, type: "Defense", rarity: "Common", element: "Neutral" },
  { name: "Sandstorm Flurry", manaCost: 5, attackPower: 13, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Pyramid Power Punch", manaCost: 6, attackPower: 15, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Obelisk Slam", manaCost: 3, attackPower: 7, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Papyrus Parry", manaCost: 2, attackPower: 0, defensePower: 5, type: "Defense", rarity: "Common", element: "Neutral" },
  { name: "Ankh Assault", manaCost: 4, attackPower: 9, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Scarab Swarm", manaCost: 3, attackPower: 6, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Hieroglyph Hex", manaCost: 2, attackPower: 4, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
];

const additionalCommonHandToHandCards = [
  { name: "Desert Mirage Kick", manaCost: 3, attackPower: 7, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Lotus Palm Strike", manaCost: 4, attackPower: 9, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Crocodile Wrap", manaCost: 5, attackPower: 12, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Sphinx Riddle", manaCost: 3, attackPower: 0, defensePower: 8, type: "Defense", rarity: "Common", element: "Neutral" },
  { name: "Mummy's Curse", manaCost: 4, attackPower: 10, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Pharaoh's Command", manaCost: 5, attackPower: 12, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
];

const commonArrowCards = [
  { name: "Reed Arrow", manaCost: 1, attackPower: 4, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Oasis Precision Shot", manaCost: 2, attackPower: 6, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Scorpion Sting Arrow", manaCost: 3, attackPower: 9, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Horus Eye Aim", manaCost: 4, attackPower: 11, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Solar Barrage", manaCost: 5, attackPower: 14, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Golden Shaft Arrow", manaCost: 2, attackPower: 5, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Venomous Arrow", manaCost: 3, attackPower: 7, defensePower: 0, type: "Attack", rarity: "Common", element: "Poison" },
  { name: "Falcon's Flight Arrow", manaCost: 4, attackPower: 10, defensePower: 0, type: "Attack", rarity: "Common", element: "Wind" },
  { name: "Anubis Arrow", manaCost: 3, attackPower: 8, defensePower: 0, type: "Attack", rarity: "Common", element: "Darkness" },
  { name: "Isis Feather Shot", manaCost: 2, attackPower: 6, defensePower: 0, type: "Attack", rarity: "Common", element: "Air" },
  { name: "Osiris Barrage", manaCost: 5, attackPower: 13, defensePower: 0, type: "Attack", rarity: "Common", element: "Life" },
];

const commonSwordCards = [
  { name: "Khopesh Slash", manaCost: 2, attackPower: 5, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Papyrus Blade Cut", manaCost: 3, attackPower: 7, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Ankh Cross Slash", manaCost: 4, attackPower: 10, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Sobek's Tooth Strike", manaCost: 5, attackPower: 13, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Crook and Flail Combo", manaCost: 6, attackPower: 16, defensePower: 0, type: "Attack", rarity: "Common", element: "Neutral" },
  { name: "Obsidian Edge", manaCost: 3, attackPower: 8, defensePower: 0, type: "Attack", rarity: "Common", element: "Darkness" },
  { name: "Jade Blade", manaCost: 4, attackPower: 11, defensePower: 0, type: "Attack", rarity: "Common", element: "Earth" },
  { name: "Emerald Saber", manaCost: 5, attackPower: 14, defensePower: 0, type: "Attack", rarity: "Common", element: "Nature" },
  { name: "Ra's Radiant Blade", manaCost: 4, attackPower: 11, defensePower: 0, type: "Attack", rarity: "Common", element: "Light" },
  { name: "Sobek's Crocodile Cleaver", manaCost: 3, attackPower: 9, defensePower: 0, type: "Attack", rarity: "Common", element: "Water" },
  { name: "Thoth's Wisdom Edge", manaCost: 5, attackPower: 12, defensePower: 0, type: "Attack", rarity: "Common", element: "Spirit" },
];

// New elemental common cards
const elementalCommonCards = [
  { name: "Flame Lash", manaCost: 2, attackPower: 6, defensePower: 0, type: "Attack", rarity: "Common", element: "Fire" },
  { name: "Gust Push", manaCost: 1, attackPower: 3, defensePower: 2, type: "Attack", rarity: "Common", element: "Air" },
  { name: "Stone Skin", manaCost: 2, attackPower: 0, defensePower: 6, type: "Defense", rarity: "Common", element: "Earth" },
  { name: "Tidal Wave", manaCost: 3, attackPower: 7, defensePower: 0, type: "Attack", rarity: "Common", element: "Water" },
  { name: "Spirit Drain", manaCost: 2, attackPower: 5, defensePower: 0, type: "Attack", rarity: "Common", element: "Spirit" },
  { name: "Shadow Veil", manaCost: 2, attackPower: 0, defensePower: 5, type: "Defense", rarity: "Common", element: "Darkness" },
  { name: "Nature's Embrace", manaCost: 3, attackPower: 0, defensePower: 8, type: "Defense", rarity: "Common", element: "Life" },
];

// Epic Cards (Expanded)
const epicCards = [
    {
      name: "Pharaoh's Fist Flurry",
      manaCost: 5,
      attackPower: 12,
      defensePower: 8,
      element: "Fire",
      type: "Epic"
    },
    {
      name: "Sphinx's Tail Whip",
      manaCost: 4,
      attackPower: 10,
      defensePower: 10,
      element: "Spirit",
      type: "Epic"
    },
    {
      name: "Nile Crocodile Chomp",
      manaCost: 6,
      attackPower: 14,
      defensePower: 6,
      element: "Water",
      type: "Epic"
    },
    {
      name: "Anubis Shadow Strike",
      manaCost: 5,
      attackPower: 11,
      defensePower: 9,
      element: "Darkness",
      type: "Epic"
    },
    {
      name: "Ra's Solar Slam",
      manaCost: 7,
      attackPower: 15,
      defensePower: 5,
      element: "Light",
      type: "Epic"
    },
    {
      name: "Pyramid Power Punch",
      manaCost: 6,
      attackPower: 8,
      defensePower: 12,
      element: "Earth",
      type: "Epic"
    },
    {
      name: "Khopesh Cyclone Slash",
      manaCost: 5,
      attackPower: 13,
      defensePower: 7,
      element: "Air",
      type: "Epic"
    },
    {
      name: "Horus Eye Beam",
      manaCost: 6,
      attackPower: 16,
      defensePower: 0,
      element: "Light",
      type: "Epic"
    },
    {
      name: "Osiris Resurrection",
      manaCost: 7,
      attackPower: 0,
      defensePower: 20,
      element: "Life",
      type: "Epic"
    },
    {
      name: "Set's Sandstorm",
      manaCost: 5,
      attackPower: 12,
      defensePower: 8,
      element: "Earth",
      type: "Epic"
    },
    {
      name: "Thoth's Cosmic Knowledge",
      manaCost: 4,
      attackPower: 10,
      defensePower: 10,
      element: "Spirit",
      type: "Epic"
    },
    {
      name: "Bastet's Feline Fury",
      manaCost: 6,
      attackPower: 15,
      defensePower: 5,
      element: "Darkness",
      type: "Epic"
    }
  ];

// Legendary Cards (NFTs - One of a kind)
const legendaryNFTCards = [
  { 
    name: "Exodia, the Forbidden One", 
    manaCost: 10, 
    attackPower: 100, 
    type: "Special", 
    rarity: "Legendary NFT",
    element: "Darkness",
    ability: "If you have all 5 pieces of Exodia in your hand, you win the duel instantly.",
    nftId: "EXO-001",
    owner: null // To be assigned when minted
  },
  { 
    name: "Amun-Ra's Solar Disc", 
    manaCost: 8, 
    attackPower: 80, 
    type: "Attack", 
    rarity: "Legendary NFT",
    element: "Fire",
    ability: "Deal 80 damage to all enemies and heal yourself for half the damage dealt.",
    nftId: "AMN-001",
    owner: null // To be assigned when minted
  },
  { 
    name: "Anubis Judgement", 
    manaCost: 7, 
    attackPower: 70, 
    type: "Special", 
    rarity: "Legendary NFT",
    element: "Spirit",
    ability: "Balance both players' HP to the average of their current HP. Draw 3 cards.",
    nftId: "ANB-001",
    owner: null // To be assigned when minted
  },
  { 
    name: "Isis Divine Protection", 
    manaCost: 9, 
    defensePower: 90, 
    type: "Defense", 
    rarity: "Legendary NFT",
    element: "Life",
    ability: "Create an invincible shield for 2 turns. Heal 30 HP for each attack blocked.",
    nftId: "ISIS-001",
    owner: null // To be assigned when minted
  },
  { 
    name: "Sekhmet's Scorching Wrath", 
    manaCost: 9, 
    attackPower: 95, 
    type: "Attack", 
    rarity: "Legendary NFT",
    element: "Fire",
    ability: "Deal 95 damage and apply a burn effect that deals 10 damage for 3 turns. Reduce the target's attack power by 50% for 2 turns.",
    nftId: "SEK-001",
    owner: null // To be assigned when minted
  },
  { 
    name: "Osiris Rebirth Ritual", 
    manaCost: 10, 
    attackPower: 0, 
    defensePower: 100, 
    type: "Special", 
    rarity: "Legendary NFT",
    element: "Life",
    ability: "Fully heal yourself and gain invulnerability for 1 turn.",
    nftId: "OSI-001",
    owner: null // To be assigned when minted
  },
  { 
    name: "Ra's Solar Barge", 
    manaCost: 8, 
    attackPower: 85, 
    defensePower: 0, 
    type: "Attack", 
    rarity: "Legendary NFT",
    element: "Light",
    ability: "Deal 85 damage and blind the enemy, reducing their accuracy by 50% for 2 turns.",
    nftId: "RA-001",
    owner: null // To be assigned when minted
  }
];

// Unique Boss and Minion Cards
const uniqueBossAndMinionCards = [
  // Ra and minions
  { name: "Ra's Solar Flare", manaCost: 5, attackPower: 15, defensePower: 0, type: "Attack", rarity: "Unique", element: "Fire", owner: "Ra", effect: "Deals damage and blinds the opponent for 1 turn, reducing their accuracy by 50%" },
  { name: "Fire Imp's Spark", manaCost: 1, attackPower: 3, defensePower: 0, type: "Attack", rarity: "Unique", element: "Fire", owner: "Fire Imp", effect: "Has a 30% chance to ignite the opponent, dealing 2 damage per turn for 2 turns" },
  { name: "Flame Wraith's Inferno", manaCost: 3, attackPower: 8, defensePower: 0, type: "Attack", rarity: "Unique", element: "Fire", owner: "Flame Wraith", effect: "Damage increases by 2 for each turn the card is held in hand" },
  { name: "Fire Elemental's Heatwave", manaCost: 4, attackPower: 0, defensePower: 10, type: "Defense", rarity: "Unique", element: "Fire", owner: "Fire Elemental", effect: "Reflects 50% of incoming damage back to the attacker for 2 turns" },
  { name: "Inferno Guardian's Hellfire", manaCost: 6, attackPower: 18, defensePower: 0, type: "Attack", rarity: "Unique", element: "Fire", owner: "Inferno Guardian", effect: "Deals damage and reduces the opponent's defense by 20% for 2 turns" },

  // Zephyr and minions
  { name: "Zephyr's Tempest", manaCost: 5, attackPower: 12, defensePower: 5, type: "Attack", rarity: "Unique", element: "Air", owner: "Zephyr", effect: "Deals damage and has a 40% chance to dodge the next attack" },
  { name: "Wind Sprite's Gust", manaCost: 1, attackPower: 2, defensePower: 2, type: "Attack", rarity: "Unique", element: "Air", owner: "Wind Sprite", effect: "Deals damage and increases speed, allowing an extra card play this turn" },
  { name: "Storm Elemental's Lightning Strike", manaCost: 3, attackPower: 9, defensePower: 0, type: "Attack", rarity: "Unique", element: "Air", owner: "Storm Elemental", effect: "Deals damage and has a 20% chance to paralyze the opponent, making them skip their next turn" },
  { name: "Gale Wraith's Cyclone", manaCost: 4, attackPower: 0, defensePower: 12, type: "Defense", rarity: "Unique", element: "Air", owner: "Gale Wraith", effect: "Creates a barrier that absorbs incoming damage and converts 50% of it to health" },
  { name: "Tempest Guardian's Hurricane", manaCost: 6, attackPower: 16, defensePower: 4, type: "Attack", rarity: "Unique", element: "Air", owner: "Tempest Guardian", effect: "Deals damage and shuffles the opponent's hand back into their deck" },

  // Geb and minions
  { name: "Geb's Tectonic Shift", manaCost: 5, attackPower: 14, defensePower: 14, type: "Attack", rarity: "Unique", element: "Earth", owner: "Geb", effect: "Deals damage and increases own defense by 50% of the damage dealt" },
  { name: "Stone Golem's Petrify", manaCost: 2, attackPower: 0, defensePower: 8, type: "Defense", rarity: "Unique", element: "Earth", owner: "Stone Golem", effect: "Increases defense and has a 20% chance to stun the attacker for 1 turn" },
  { name: "Boulder Beast's Avalanche", manaCost: 4, attackPower: 10, defensePower: 5, type: "Attack", rarity: "Unique", element: "Earth", owner: "Boulder Beast", effect: "Deals damage and has a 30% chance to reduce the opponent's movement speed by 50% for 2 turns" },
  { name: "Crystal Colossus' Gem Blast", manaCost: 5, attackPower: 12, defensePower: 0, type: "Attack", rarity: "Unique", element: "Earth", owner: "Crystal Colossus", effect: "Deals damage and creates a crystal shield that absorbs the next incoming attack" },
  { name: "Mountain Titan's Seismic Slam", manaCost: 7, attackPower: 20, defensePower: 0, type: "Attack", rarity: "Unique", element: "Earth", owner: "Mountain Titan", effect: "Deals massive damage and has a 40% chance to destroy one of the opponent's mana crystals" },

  // Nephthys and minions
  { name: "Nephthys' Flood", manaCost: 6, attackPower: 10, defensePower: 10, type: "Attack", rarity: "Unique", element: "Water", owner: "Nephthys", effect: "Deals damage to all enemies and heals all allies for the same amount" },
  { name: "Water Sprite's Mist", manaCost: 2, attackPower: 0, defensePower: 6, type: "Defense", rarity: "Unique", element: "Water", owner: "Water Sprite", effect: "Creates a mist that reduces the accuracy of all enemies by 30% for 2 turns" },
  { name: "Tidal Elemental's Riptide", manaCost: 4, attackPower: 8, defensePower: 4, type: "Attack", rarity: "Unique", element: "Water", owner: "Tidal Elemental", effect: "Deals damage and pulls one random card from the opponent's hand into your hand" },
  { name: "Whirlpool Wraith's Vortex", manaCost: 5, attackPower: 12, defensePower: 0, type: "Attack", rarity: "Unique", element: "Water", owner: "Whirlpool Wraith", effect: "Deals damage and has a 50% chance to return the opponent's last played card to their hand" },
  { name: "Tsunami Titan's Deluge", manaCost: 7, attackPower: 18, defensePower: 0, type: "Attack", rarity: "Unique", element: "Water", owner: "Tsunami Titan", effect: "Deals damage to all enemies and has a 30% chance to wash away their defensive buffs" },

  // Thoth and minions
  { name: "Thoth's Cosmic Insight", manaCost: 4, attackPower: 0, defensePower: 0, type: "Special", rarity: "Unique", element: "Spirit", owner: "Thoth", effect: "Draw 3 cards and reduce their mana cost by 1 for this turn" },
  { name: "Wisp's Ethereal Touch", manaCost: 1, attackPower: 2, defensePower: 0, type: "Attack", rarity: "Unique", element: "Spirit", owner: "Wisp", effect: "Deals damage and grants invisibility for 1 turn, preventing the next incoming attack" },
  { name: "Phantom's Possession", manaCost: 3, attackPower: 6, defensePower: 0, type: "Attack", rarity: "Unique", element: "Spirit", owner: "Phantom", effect: "Deals damage and allows you to control the opponent's next card play" },
  { name: "Banshee's Wail", manaCost: 5, attackPower: 10, defensePower: 0, type: "Attack", rarity: "Unique", element: "Spirit", owner: "Banshee", effect: "Deals damage and silences the opponent for 1 turn, preventing them from playing attack cards" },
  { name: "Ethereal Lord's Astral Projection", manaCost: 6, attackPower: 14, defensePower: 8, type: "Attack", rarity: "Unique", element: "Spirit", owner: "Ethereal Lord", effect: "Deals damage and creates an astral copy of this card in your hand" },

  // Set and minions
  { name: "Set's Chaos Storm", manaCost: 7, attackPower: 20, defensePower: 0, type: "Attack", rarity: "Unique", element: "Darkness", owner: "Set", effect: "Deals damage and corrupts 2 random cards in the opponent's hand, making them unusable for 2 turns" },
  { name: "Shadow Lurker's Ambush", manaCost: 2, attackPower: 5, defensePower: 0, type: "Attack", rarity: "Unique", element: "Darkness", owner: "Shadow Lurker", effect: "Deals damage and goes into stealth, becoming untargetable for the next turn" },
  { name: "Void Stalker's Null Zone", manaCost: 4, attackPower: 8, defensePower: 4, type: "Attack", rarity: "Unique", element: "Darkness", owner: "Void Stalker", effect: "Deals damage and creates a zone that negates all healing effects for 2 turns" },
  { name: "Nightmare Beast's Terror", manaCost: 5, attackPower: 12, defensePower: 0, type: "Attack", rarity: "Unique", element: "Darkness", owner: "Nightmare Beast", effect: "Deals damage and inflicts 'Fear', reducing the opponent's attack power by 30% for 2 turns" },
  { name: "Abyssal Horror's Void Crush", manaCost: 6, attackPower: 16, defensePower: 0, type: "Attack", rarity: "Unique", element: "Darkness", owner: "Abyssal Horror", effect: "Deals damage and has a 40% chance to banish the top card of the opponent's deck" },

  // Isis and minions
  { name: "Isis' Resurrection", manaCost: 7, attackPower: 0, defensePower: 20, type: "Defense", rarity: "Unique", element: "Life", owner: "Isis", effect: "Revives a defeated minion with 50% HP and adds it back to the field" },
  { name: "Sapling Sprite's Growth", manaCost: 2, attackPower: 0, defensePower: 5, type: "Defense", rarity: "Unique", element: "Life", owner: "Sapling Sprite", effect: "Increases max HP by 10 and heals for 5 HP" },
  { name: "Bloom Guardian's Pollination", manaCost: 3, attackPower: 6, defensePower: 6, type: "Attack", rarity: "Unique", element: "Life", owner: "Bloom Guardian", effect: "Deals damage and heals all friendly minions for 3 HP" },
  { name: "Nature's Warden Entanglement", manaCost: 4, attackPower: 8, defensePower: 8, type: "Attack", rarity: "Unique", element: "Life", owner: "Nature's Warden", effect: "Deals damage and roots the opponent, reducing their attack power by 30% for 2 turns" },
  { name: "Ancient Treant's Wisdom", manaCost: 5, attackPower: 0, defensePower: 15, type: "Defense", rarity: "Unique", element: "Life", owner: "Ancient Treant", effect: "Grants immunity to status effects for 2 turns and draws 2 cards" }
];

// Function to assign an element to a card
const assignElementToCard = (card, element) => ({
  ...card,
  element,
  name: `${element} ${card.name}`,
});

// Combine all regular cards
const allCards = [
  ...commonHandToHandCards,
  ...additionalCommonHandToHandCards,
  ...commonArrowCards,
  ...commonSwordCards,
  ...elementalCommonCards,
  ...epicCards,
  ...uniqueBossAndMinionCards
];

// Export the card arrays and the assignElementToCard function
export {
  allCards,
  legendaryNFTCards,
  commonHandToHandCards,
  additionalCommonHandToHandCards,
  commonArrowCards,
  commonSwordCards,
  elementalCommonCards,
  epicCards,
  uniqueBossAndMinionCards,
  assignElementToCard
};
