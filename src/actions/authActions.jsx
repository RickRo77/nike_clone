export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

export const LoginUser = ({email,password}) => ({
  type: LOGIN,
  payload: {email,password},
});

export const LogoutUser = () => ({
    type: LOGOUT,
  });

export const SignupUser = ({username,email,password}) => ({
type: SIGNUP,
payload: {username,email,password},
});