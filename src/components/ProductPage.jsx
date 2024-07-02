import { useState } from 'react';
import '../App.css';
import MainDisp from './MainDisp';
import Sidebar from './SideBar';
import SearchBar from './SearchBar';

function ProductPage() {
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
    <div>
      <Sidebar updateFilter={updateFilter} Filter={Filter}/>
      <SearchBar updateSearch={updateSearch}></SearchBar>
      <MainDisp Filter={Filter} />
    </div>
  );
}

export default ProductPage;
