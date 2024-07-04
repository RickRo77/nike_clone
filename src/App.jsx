import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import Login from './auth/Login';
import Signup from './auth/Signup'

function App() {
  const [Filter, setFilter] = useState(
    {
        division:[],
        category:[],
        subCategory:[],
        search:[]
    }
  );
 
  const updateFilter = (event) => {
    const { name, value, checked } = event.target;
    // console.log('name '+name)
    setFilter((prevFilters) => {
        const updatedFilter = checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((filter) => filter !== value);
  
        const newFilters = {
          ...prevFilters,
          [name]: updatedFilter
        };
    // console.log(Filter)
    // onFilterChange({
    //   ...Filter,
    //   [name]: selectedOptions
    // });
    console.log(newFilters)
    return newFilters;
  })};


  const updateSearch =(text) => {
    setFilter((prevFilters)=>{
        const newFilters = {...prevFilters, search:[text]}
        return newFilters;
    })
  }
  return (
    <Router>
      <div className="App">
        <Navbar updateSearch={updateSearch}></Navbar>
        <Routes>
          <Route exact path="/" element={<ProductPage updateFilter={updateFilter} updateSearch={updateSearch} Filter={Filter}></ProductPage>} />
          <Route path="/favorites" element={<Favorites></Favorites>} />
        </Routes>
        {/* <Login/>
        <Signup/> */}
      </div>
    </Router>
  );
}

export default App;
