import * as states from './states.js';
import * as actions from './actions.js';

//roles
const wizard = states.state({"name": "player", "HP": 25, "ATT": 8, "DEF": 1, "actions": {}});
wizard(actions.addMagicMissile);
wizard(actions.addFireball);

const barbarian = states.state({"name": "player", "HP": 35, "ATT": 6, "DEF": 2, "actions": {}});
barbarian(actions.addGenericAttack);
barbarian(actions.addPowerStrike);

const paladin = states.state({"name": "player", "HP": 40, "ATT": 5, "DEF": 3, "actions": {}});
paladin(actions.addGenericAttack);
paladin(actions.addHeal);

const ranger = states.state({"name": "player", "HP": 30, "ATT": 8, "DEF": 1, "actions": {}});
ranger(actions.addGenericAttack);
ranger(actions.addDualShot);

export const roleSelection = {
  "wizard": wizard,
  "barbarian": barbarian,
  "paladin": paladin, 
  "ranger": ranger
};

//enemies
export const goblin = states.state({"name": "goblin", "HP": 15, "ATT": 1, "DEF": 1, "actions": {}});
goblin(actions.addGenericAttack);
goblin(actions.addPowerStrike);