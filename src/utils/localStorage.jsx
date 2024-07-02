export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('favoritesState', serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  };

export const loadState = () => {
try {
    const serializedState = localStorage.getItem('favoritesState');
    if (serializedState === null) {
    return undefined; // If no state is found, return undefined to use the reducer's initial state
    }
    return JSON.parse(serializedState);
} catch (err) {
    console.error('Could not load state', err);
    return undefined;
}
};