// src/reducers/authReducer.js

import { LOGIN, LOGOUT, SIGNUP } from '../actions/authActions';

const initialState = {
  username: '',
  email: '',
  password: '',
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    case SIGNUP:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        loggedIn: true,
      };

    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default authReducer;
