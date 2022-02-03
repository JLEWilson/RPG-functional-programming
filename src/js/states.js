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