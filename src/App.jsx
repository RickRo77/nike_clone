import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<ProductPage></ProductPage>} />
          <Route path="/favorites" element={<Favorites></Favorites>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
