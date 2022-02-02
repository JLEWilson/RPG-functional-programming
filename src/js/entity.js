export const state = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const setPropToValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: value
    });
  };
};

export const modifyPropByValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const addAction = (actionName, actionFunction) => {
  return (state) => ({...state,
    "actions": {...state.actions,
      [actionName]: actionFunction
    }
  });
};



////////////////////////////NOTES////////////////////////////////////////////
/*
const wizard = state({"HP": 3, "ATT": 5, "DEF": 1, "actions": {}, "name": ""})
const paladin = state({"HP": 5, "ATT": 3, "DEF": 3, "actions": {}, "name": ""})
const ranger = state({"HP": 3, "ATT": 5, "DEF": 1, "actions": {}, "name": ""})
const barbarian = state({"HP": 8, "ATT": 4, "DEF": 2, "actions": {}, "name": ""})

const goblin = state({HP: 2, ATT:3, DEF: 0})


const canEat = (creature) => ({
  eat: (food) => {
    return `The ${creature.name} eats the ${food}.`
  }
});

const canMagicMissile = (state) => ({...state,
  "actions": {
    "magicMissile": (enemy) => {
      // dispatch a message to our message handler for user UI feedback
      // return modified enemy state
    }
  }
});

wizard(canMagicMissile)

const attackTheGoblin = modifyPropByValue(HP)(-playerState.att)(goblinState);

const attack = modifyPropByValue(HP)
const heavyBlow = attack(playerState.att * 2)

$(click on the enemy) {
heavyBlow(enemyclickedon)
}

const takeDamage = changeState("hp")(-1)

const playerState = state({HP: 3, att: 5, def: 3});
const enemyState = state({HP: 2, att: 2, def: 1});

playerState(feedPotion)


function enemyFactory(HP, att, def) {
  return state({HP: HP, att: att, def: def})
}

goblin1 = enemyFactory(1, 2, 3);

goblin1(feedPotion)
*/