import React from "react";
import { useEffect,useState } from "react";


export default function SearchBar({updateFilter}){
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        updateFilter(name, value);
    };
    
    return(
        <div className="filter-group">
        <label htmlFor="search">Search by Product Name:</label>
        <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={handleSearchChange}
        />
    </div>
    )
}