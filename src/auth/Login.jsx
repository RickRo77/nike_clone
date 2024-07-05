// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {LoginUser} from '../actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  // const authStatus = useSelector((state) => state.auth.status);
  // const authError = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(auth.email===email &&auth.password===password)
      dispatch(LoginUser({ email, password }));
    else
      alert('Wrong Login Credentials')
  };

  console.log(auth)
  return (
    <div className='Signup' style={{margin:'5%',padding:'2%',backgroundColor:'#2b2b2b',borderColor:'white',borderStyle:'solid',borderWidth:'1px',borderRadius:'7px'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{margin:'10px'}} type="submit">Login</button>
      </form>
      {/* {authStatus === 'loading' && <p>Loading...</p>}
      {authError && <p>{authError}</p>} */}

      {/* <h1>{auth.loggedIn?auth.loggedIn:'loading'}</h1> */}
    </div>
  );
};

export default Login;
