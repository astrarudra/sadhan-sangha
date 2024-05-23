export const loadState = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.log(err, key, "ERROR LOAD")
      return undefined;
    }
  };

export const saveState = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.log(err, key, "ERROR SAVE")
    }
};

export const loadStateBulk = (keys) => {
    let state = {}
    keys.forEach(key => {
        state[key] = loadState(key)
    })
    return state
}

export const saveStateBulk = (states) => {
    Object.keys(states).forEach(key => {
        saveState(key, states[key])
    })
}