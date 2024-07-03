import React from 'react';

function Sidebar({ updateFilter,Filter }) {
  const handleFilterChange = (e) => {
    updateFilter(e);
    // console.log(Filter)
  };

  return (
    <div className="sidebar" style={{width:'20vw'}}>
      <h2>Filters</h2>
      <div className="filter-group">
        <label>Category:</label>
        <div>
          <input type="checkbox" name="category" value="Shoes" onChange={handleFilterChange} />
          <label>Shoes</label>
        </div>
        <div>
          <input type="checkbox" name="category" value="Clothing" onChange={handleFilterChange} />
          <label>Clothing</label>
        </div>
      </div>
      <div className="filter-group">
        <label>Division:</label>
        <div>
          <input type="checkbox" name="division" value="Men" onChange={handleFilterChange} />
          <label>Men</label>
        </div>
        <div>
          <input type="checkbox" name="division" value="Women" onChange={handleFilterChange} />
          <label>Women</label>
        </div>
        <div>
          <input type="checkbox" name="division" value="Unisex" onChange={handleFilterChange} />
          <label>Unisex</label>
        </div>
      </div>
      <div className="filter-group">
        <label>Sub-Category:</label>
        <div>
          <input type="checkbox" name="subCategory" value="Lifestyle" onChange={handleFilterChange} />
          <label>Lifestyle</label>
        </div>
        <div>
          <input type="checkbox" name="subCategory" value="Basketball" onChange={handleFilterChange} />
          <label>Basketball</label>
        </div>
        <div>
          <input type="checkbox" name="subCategory" value="Training & Gym" onChange={handleFilterChange} />
          <label>Training & Gym</label>
        </div>
        <div>
          <input type="checkbox" name="subCategory" value="Clothing" onChange={handleFilterChange} />
          <label>Clothing</label>
        </div>
      </div>
    </div>
  );

}

export default Sidebar;
