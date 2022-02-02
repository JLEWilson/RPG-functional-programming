import * as states from './states.js';
import * as actions from './actions.js';

export const wizard = states.state({"name": "player", "HP": 30, "ATT": 5, "DEF": 1, "actions": {}});
wizard(actions.addMagicMissile);
wizard(actions.addFireball);

export const goblin = states.state({"name": "goblin", "HP": 10, "ATT": 1, "DEF": 1, "actions": {}});
goblin(actions.addMagicMissile);
goblin(actions.addFireball);