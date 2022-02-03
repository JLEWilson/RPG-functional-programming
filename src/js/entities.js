import * as states from './states.js';
import * as actions from './actions.js';

//roles
const wizard = states.state({"name": "player", "class": "Wizard", "HP": 25, "ATT": 8, "DEF": 1, "actions": {}});
wizard(actions.addMagicMissile);
wizard(actions.addFireball);

const barbarian = states.state({"name": "player", "class": "Barbarian", "HP": 35, "ATT": 6, "DEF": 2, "actions": {}});
barbarian(actions.addGenericAttack);
barbarian(actions.addPowerStrike);

const paladin = states.state({"name": "player", "class": "Paladin", "HP": 40, "ATT": 4, "DEF": 2, "actions": {}});
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

const elemental = states.state({"name": "Sherry", "class": "Elemental", "HP": 20, "ATT": 4, "DEF": 3, "actions": {}});
elemental(actions.addGenericAttack);
elemental(actions.addFireball);

const giantrat = states.state({"name": "Pinky", "class": "Giant Rat", "HP": 10, "ATT": 5, "DEF": 0, "actions": {}});
giantrat(actions.addGenericAttack);

export const enemies = {
  "goblin": goblin,
  "kobold":  kobold,
  "elemental": elemental,
  "giantrat" : giantrat
};

export const twoRandomEnemies = () => {
  const enemyOptions = Object.keys(enemies);
  const random1 = Math.floor(Math.random() * enemyOptions.length);
  let random2 = Math.floor(Math.random() * enemyOptions.length);
  while (random1 === random2){
    random2 = Math.floor(Math.random() * enemyOptions.length);
  }
  const enemy1 = enemies[enemyOptions[random1]];
  const enemy2 = enemies[enemyOptions[random2]];
  return [enemy1, enemy2];
};