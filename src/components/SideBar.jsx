import React from 'react';
import { useState } from 'react';

function Sidebar({ updateFilter,Filter }) {
  const handleFilterChange = (e) => {
    updateFilter(e);
    // console.log(Filter)
  };

  const [showCategory, setShowCategory] = useState(false);
  const [showDivision, setShowDivision] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);

  return (
    <div className='SidebarContainer' style={{height:'80vh',overflowY:'scroll'}}>
      <h2>Filters</h2>
      <div style={{marginBottom:'20px'}}>
        <div className='Label' onClick={() => setShowCategory(!showCategory)}>Category</div>
        {showCategory && (
          <div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="category" value="Shoes" onChange={handleFilterChange} />
              <label>Shoes</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="category" value="Clothing" onChange={handleFilterChange} />
              <label>Clothing</label>
            </div>
          </div>
        )}
      </div>
      <div style={{marginBottom:'20px'}}>
        <div className='Label' onClick={() => setShowDivision(!showDivision)}>Division</div>
        {showDivision && (
          <div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="division" value="Men" onChange={handleFilterChange} />
              <label>Men</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="division" value="Women" onChange={handleFilterChange} />
              <label>Women</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="division" value="Kids" onChange={handleFilterChange} />
              <label>Kids</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="division" value="Unisex" onChange={handleFilterChange} />
              <label>Unisex</label>
            </div>
          </div>
        )}
      </div>
      <div style={{marginBottom:'20px'}}>
        <div className='Label' onClick={() => setShowSubCategory(!showSubCategory)}>Sub-Category</div>
        {showSubCategory && (
          <div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="subCategory" value="Lifestyle" onChange={handleFilterChange} />
              <label>Lifestyle</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="subCategory" value="Basketball" onChange={handleFilterChange} />
              <label>Basketball</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="subCategory" value="Training & Gym" onChange={handleFilterChange} />
              <label>Training & Gym</label>
            </div>
            <div className='CheckboxContainer'>
              <input type="checkbox" name="subCategory" value="Soccer" onChange={handleFilterChange} />
              <label>Soccer</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );

}

export default Sidebar;
