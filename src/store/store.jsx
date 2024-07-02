import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favoritesReducer';
import { loadState, saveState } from '../utils/localStorage';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites,
  });
});

export default store;
