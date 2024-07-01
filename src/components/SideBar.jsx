import React from 'react';

function Sidebar({ updateFilter }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    updateFilter(name, value);
  };

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={handleFilterChange}>
          <option value="">Select Category</option>
          <option value="Shoes">Shoes</option>
          <option value="Clothing">Clothing</option>
          <option value="Apparel">Apparel</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="division">Division:</label>
        <select name="division" id="division" onChange={handleFilterChange}>
          <option value="">Select Division</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="subCategory">subCategory:</label>
        <select name="subCategory" id="subCategory" onChange={handleFilterChange}>
          <option value="">Select Sub-Category</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Basketball">Basketball</option>
          <option value="Training & Gym">Training & Gym</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;
