import React from "react";
import { useEffect,useState } from "react";


export default function SearchBar({updateSearch}){
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        updateSearch(value);
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