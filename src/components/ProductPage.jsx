import { useState } from 'react';
import '../App.css';
import MainDisp from './MainDisp';
import Sidebar from './SideBar';
import SearchBar from './SearchBar';

function ProductPage() {
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
    <div>
      <Sidebar updateFilter={updateFilter} />
      <SearchBar updateFilter={updateFilter}></SearchBar>
      <MainDisp Filter={Filter} />
    </div>
  );
}

export default ProductPage;
