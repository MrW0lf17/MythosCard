// src/data/bosses.js

import { v4 as uuidv4 } from 'uuid';
import { getDeck } from './decks';

const createMinion = (name, hp, attackPower, element) => ({
  id: uuidv4(),
  name,
  hp,
  maxHp: hp,
  attackPower,
  defeated: false,
  element,
  deck: getDeck(name)
});

export const bosses = [
  {
    name: 'Ra',
    unlocked: false,
    hp: 250,
    maxHp: 250,
    attackPower: 25,
    element: 'Fire',
    minions: [
      createMinion('Fire Imp', 50, 10, 'Fire'),
      createMinion('Flame Wraith', 60, 12, 'Fire'),
      createMinion('Fire Elemental', 70, 14, 'Fire'),
      createMinion('Inferno Guardian', 80, 16, 'Fire'),
    ],
    deck: getDeck('Ra'),
    specialAbility: {
      name: "Solar Apocalypse",
      description: "Ra unleashes the full power of the sun, dealing massive damage and gaining a powerful buff.",
      effect: (boss, opponent) => {
        const damage = Math.floor(boss.maxHp * 0.3);
        opponent.hp -= damage;
        boss.attackPower *= 2;
        boss.hp += Math.floor(boss.maxHp * 0.2);
        return `Ra deals ${damage} damage, doubles his attack power, and heals 20% of his max HP!`;
      }
    }
  },
  {
    name: 'Zephyr',
    unlocked: false,
    hp: 240,
    maxHp: 240,
    attackPower: 20,
    element: 'Air',
    minions: [
      createMinion('Wind Sprite', 45, 9, 'Air'),
      createMinion('Storm Elemental', 55, 11, 'Air'),
      createMinion('Gale Wraith', 65, 13, 'Air'),
      createMinion('Tempest Guardian', 75, 15, 'Air'),
    ],
    deck: getDeck('Zephyr'),
    specialAbility: {
      name: "Cyclone Maelstrom",
      description: "Zephyr summons a devastating cyclone, granting extreme speed and evasion.",
      effect: (boss, opponent) => {
        boss.evasion = 75;
        boss.extraTurn = true;
        return "Zephyr gains 75% evasion and an extra turn!";
      }
    }
  },
  {
    name: 'Geb',
    unlocked: false,
    hp: 260,
    maxHp: 260,
    attackPower: 22,
    element: 'Earth',
    minions: [
      createMinion('Stone Golem', 55, 11, 'Earth'),
      createMinion('Boulder Beast', 65, 13, 'Earth'),
      createMinion('Crystal Colossus', 75, 15, 'Earth'),
      createMinion('Mountain Titan', 85, 17, 'Earth'),
    ],
    deck: getDeck('Geb'),
    specialAbility: {
      name: "Tectonic Reshape",
      description: "Geb reshapes the battlefield, massively boosting his defenses.",
      effect: (boss, opponent) => {
        const defense = Math.floor(boss.maxHp * 0.5);
        boss.defense += defense;
        return `Geb gains ${defense} defense!`;
      }
    }
  },
  {
    name: 'Nephthys',
    unlocked: false,
    hp: 230,
    maxHp: 230,
    attackPower: 18,
    element: 'Water',
    minions: [
      createMinion('Water Sprite', 40, 8, 'Water'),
      createMinion('Tidal Elemental', 50, 10, 'Water'),
      createMinion('Whirlpool Wraith', 60, 12, 'Water'),
      createMinion('Tsunami Titan', 70, 14, 'Water'),
    ],
    deck: getDeck('Nephthys'),
    specialAbility: {
      name: "Great Deluge",
      description: "Nephthys summons a great flood, healing herself and weakening her opponent.",
      effect: (boss, opponent) => {
        const heal = Math.floor(boss.maxHp * 0.5);
        boss.hp += heal;
        opponent.hp -= Math.floor(opponent.maxHp * 0.2);
        opponent.attackPower = Math.floor(opponent.attackPower * 0.7);
        return `Nephthys heals herself for ${heal}, reduces opponent's HP by 20% and attack by 30%!`;
      }
    }
  },
  {
    name: 'Thoth',
    unlocked: false,
    hp: 220,
    maxHp: 220,
    attackPower: 30,
    element: 'Spirit',
    minions: [
      createMinion('Wisp', 35, 7, 'Spirit'),
      createMinion('Phantom', 45, 9, 'Spirit'),
      createMinion('Banshee', 55, 11, 'Spirit'),
      createMinion('Ethereal Lord', 65, 13, 'Spirit'),
    ],
    deck: getDeck('Thoth'),
    specialAbility: {
      name: "Cosmic Enlightenment",
      description: "Thoth taps into cosmic knowledge, granting immense power and wisdom.",
      effect: (boss, opponent) => {
        boss.mana *= 2;
        boss.drawCards = 3;
        return "Thoth doubles his mana and draws 3 cards!";
      }
    }
  },
  {
    name: 'Set',
    unlocked: false,
    hp: 270,
    maxHp: 270,
    attackPower: 28,
    element: 'Darkness',
    minions: [
      createMinion('Shadow Lurker', 60, 12, 'Darkness'),
      createMinion('Void Stalker', 70, 14, 'Darkness'),
      createMinion('Nightmare Beast', 80, 16, 'Darkness'),
      createMinion('Abyssal Horror', 90, 18, 'Darkness'),
    ],
    deck: getDeck('Set'),
    specialAbility: {
      name: "Chaos Incarnate",
      description: "Set unleashes pure chaos, corrupting the battlefield and empowering dark forces.",
      effect: (boss, opponent) => {
        boss.attackPower *= 2;
        opponent.hp -= Math.floor(opponent.maxHp * 0.3);
        opponent.corrupted = true;
        return "Set doubles his attack, deals 30% max HP damage to the opponent and corrupts them!";
      }
    }
  },
  {
    name: 'Isis',
    unlocked: false,
    hp: 240,
    maxHp: 240,
    attackPower: 23,
    element: 'Life',
    minions: [
      createMinion('Sapling Sprite', 45, 9, 'Life'),
      createMinion('Bloom Guardian', 55, 11, 'Life'),
      createMinion('Nature\'s Warden', 65, 13, 'Life'),
      createMinion('Ancient Treant', 75, 15, 'Life'),
    ],
    deck: getDeck('Isis'),
    specialAbility: {
      name: "Genesis Rebirth",
      description: "Isis channels the power of creation, granting immense regeneration.",
      effect: (boss, opponent) => {
        boss.hp = boss.maxHp;
        boss.regeneration = Math.floor(boss.maxHp * 0.1);
        return "Isis fully heals herself and gains 10% max HP regeneration per turn!";
      }
    }
  },
];

export const getBoss = (bossName) => bosses.find(boss => boss.name === bossName);

export const getMinion = (bossName, minionName) => {
  const boss = getBoss(bossName);
  return boss ? boss.minions.find(minion => minion.name === minionName) : null;
};

export const updateBossState = (bossName, newState) => {
  const bossIndex = bosses.findIndex(boss => boss.name === bossName);
  if (bossIndex !== -1) {
    bosses[bossIndex] = { ...bosses[bossIndex], ...newState };
  }
};

export const updateMinionState = (bossName, minionName, newState) => {
  const boss = getBoss(bossName);
  if (boss) {
    const minionIndex = boss.minions.findIndex(minion => minion.name === minionName);
    if (minionIndex !== -1) {
      boss.minions[minionIndex] = { ...boss.minions[minionIndex], ...newState };
    }
  }
};

export const checkBossSpecialAbility = (boss, opponent) => {
  if (boss.hp <= boss.maxHp * 0.3 && !boss.specialAbilityUsed) {
    const result = boss.specialAbility.effect(boss, opponent);
    boss.specialAbilityUsed = true;
    return result;
  }
  return null;
};
