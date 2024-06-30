import { useState } from 'react';
import './App.css';
import MainDisp from './components/MainDisp';
import Sidebar from './components/SideBar';
import SearchBar from './components/SearchBar';

function App() {
  const [Filter, setFilter] = useState([new Map()]);
 
  const updateFilter = (key, value) => {
    setFilter((prevFilter) => {
      const newFilter = new Map(prevFilter[0]);
      if (value) {
        newFilter.set(key, value);
      } else {
        newFilter.delete(key);
      }
      return [newFilter];
    });
  };


  return (
    <div className="App">
      <Sidebar updateFilter={updateFilter} />
      <SearchBar updateFilter={updateFilter}></SearchBar>
      <MainDisp Filter={Filter} />
    </div>
  );
}

export default App;
