// src/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useDispatch,useSelector } from 'react-redux';
import { LogoutUser } from '../actions/authActions';
import { useState } from 'react';

function Navbar({updateSearch}){
  const dispatch = useDispatch();
  const auth=useSelector(state=>state.auth)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className='sideNav'>
        <img src='src/assets/logo.jpg' style={{height:'80px',marginLeft:'50px'}}></img>
      </div>
      <div className='sideNav'>
        <SearchBar updateSearch={updateSearch}></SearchBar>
        <Link to='/'><button style={{marginLeft:'15px',padding: '10px 15px',fontSize: '16px',color: '#000',backgroundColor: 'rgb(172 173 171)',border: 'none',borderRadius: '4px',cursor: 'pointer',transition: 'background-color 0.3s'}}>Home</button></Link>
        <Link to='/favorites'><button style={{marginLeft:'15px',padding: ' 10px 15px',fontSize: '16px',color: '#000',backgroundColor: 'rgb(172 173 171)',border: 'none',borderRadius: '4px',cursor: 'pointer',transition: 'background-color 0.3s'}}>Favorites</button></Link>
        
        <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)} style={{marginLeft:'15px',padding: ' 10px 15px',fontSize: '16px',color: '#000',backgroundColor: 'rgb(172 173 171)',border: 'none',borderRadius: '4px',cursor: 'pointer',transition: 'background-color 0.3s'}}className="dropdown-toggle">
          Profile
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <span className="dropdown-label">Username:</span>
              <span className="dropdown-value">{auth.username || 'N/A'}</span>
            </div>
            <div className="dropdown-item">
              <span className="dropdown-label">Email:</span>
              <span className="dropdown-value">{auth.email || 'N/A'}</span>
            </div>
            <button onClick={()=>{dispatch(LogoutUser())}} className="dropdown-logout">
              Logout
            </button>
          </div>
          )}
        </div>
        
        {/* <button onClick={()=>{dispatch(LogoutUser())}} style={{marginLeft:'15px',padding: ' 10px 15px',fontSize: '16px',color: '#000',backgroundColor: 'rgb(172 173 171)',border: 'none',borderRadius: '4px',cursor: 'pointer',transition: 'background-color 0.3s'}}>Log Out</button> */}
    </div>
    </nav>
  );
};

export default Navbar;
