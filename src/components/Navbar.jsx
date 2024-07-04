// src/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

function Navbar({updateSearch}){
  return (
    <nav>
      <SearchBar updateSearch={updateSearch}></SearchBar>
      <Link to='/'><button style={{marginLeft:'15px',padding: '10px 15px',fontSize: '16px',color: '#fff',backgroundColor: '#007bff',border: 'none',borderRadius: '4px',cursor: 'pointer',transition: 'background-color 0.3s'}}>Home</button></Link>
      <Link to='/favorites'><button style={{marginLeft:'15px',padding: ' 10px 15px',fontSize: '16px',color: '#fff',backgroundColor: '#007bff',border: 'none',borderRadius: '4px',cursor: 'pointer',transition: 'background-color 0.3s'}}>Favorites</button></Link>
    </nav>
  );
};

export default Navbar;
