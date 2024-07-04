import { useState } from 'react';
import '../App.css';
import MainDisp from './MainDisp';
import Sidebar from './SideBar';
import SearchBar from './SearchBar';

function ProductPage({updateFilter,updateSearch,Filter}) {
  return (
    <div style={{display:'flex',height:'85vh'}}>
      <Sidebar updateFilter={updateFilter} Filter={Filter}/>
      <MainDisp Filter={Filter} />
    </div>
  );
}

export default ProductPage;
