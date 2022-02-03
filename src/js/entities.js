import * as states from './states.js';
import * as actions from './actions.js';

//roles
const wizard = states.state({"name": "player", "class": "Wizard", "HP": 25, "ATT": 8, "DEF": 1, "actions": {}});
wizard(actions.addMagicMissile);
wizard(actions.addFireball);

const barbarian = states.state({"name": "player", "class": "Barbarian", "HP": 35, "ATT": 6, "DEF": 2, "actions": {}});
barbarian(actions.addGenericAttack);
barbarian(actions.addPowerStrike);

const paladin = states.state({"name": "player", "class": "Paladin", "HP": 40, "ATT": 4, "DEF": 3, "actions": {}});
paladin(actions.addGenericAttack);
paladin(actions.addHeal);

const ranger = states.state({"name": "player", "class": "Wranger", "HP": 30, "ATT": 8, "DEF": 1, "actions": {}});
ranger(actions.addGenericAttack);
ranger(actions.addDualShot);

export const roleSelection = {
  "Wizard": wizard,
  "Barbarian": barbarian,
  "Paladin": paladin, 
  "Wranger": ranger
};

//enemies
const goblin = states.state({"name": "Gary", "class": "Goblin", "HP": 15, "ATT": 1, "DEF": 1, "actions": {}});
goblin(actions.addGenericAttack);
goblin(actions.addPowerStrike);

const kobold = states.state({"name": "Barry", "class": "Kobold", "HP": 20, "ATT": 2, "DEF": 2, "actions": {}});
kobold(actions.addGenericAttack);
kobold(actions.addDualShot);

const elemental = states.state({"name": "Sherry", "class": "Elemental", "HP": 20, "ATT": 4, "DEF": 2, "actions": {}});
elemental(actions.addGenericAttack);
elemental(actions.addFireball);

export const enemies = {
  "goblin": goblin,
  "kobold":  kobold,
  "elemental": elemental
};

export const twoRandomEnemies = () => {
  const enemyOptions = Object.keys(enemies);
  const enemy1 = enemies[enemyOptions[Math.floor(Math.random() * enemyOptions.length)]];
  const enemy2 = enemies[enemyOptions[Math.floor(Math.random() * enemyOptions.length)]];
  return [enemy1, enemy2];
};