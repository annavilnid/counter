export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('stateCounter');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('stateCounter', serializedState);
  } catch {
    // ignore write errors
  }
};