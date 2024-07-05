// src/components/Signup.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SignupUser} from '../actions/authActions';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  // const authStatus = useSelector((state) => state.auth.status);
  // const authError = useSelector((state) => state.auth.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignupUser({ username, email, password }));
  };

  return (
    <div className='Signup' style={{margin:'5%',padding:'2%',backgroundColor:'#2b2b2b',borderColor:'white',borderStyle:'solid',borderWidth:'1px',borderRadius:'7px'}}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button style={{margin:'10px'}} type="submit">Signup</button>
      </form>
      {/* {authStatus === 'loading' && <p>Loading...</p>}
      {authError && <p>{authError}</p>} */}
    </div>
  );
};

export default Signup;
