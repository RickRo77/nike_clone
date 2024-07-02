// src/reducers/favoritesReducer.js

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/favoritesActions';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(product => product.articleNo !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
