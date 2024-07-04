// src/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from '../reducers/favoritesReducer';
import authReducer from '../auth/authSlice';
import { loadState, saveState } from '../utils/localStorage';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  auth: authReducer,
});

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    favorites: store.getState().favorites,
    auth: store.getState().auth, // Persist the auth state
  });
});

export default store;
