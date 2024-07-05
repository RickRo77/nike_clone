import React from "react";
import { useEffect,useState } from "react";


export default function SearchBar({updateSearch}){
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        updateSearch(value);
    };
    
    return(
        <div className="filter-group" >
        <label htmlFor="search">Search: </label>
        <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            onChange={handleSearchChange}
            style={{padding: '10px 15px',fontSize: '16px',backgroundColor:'rgb(172 173 171)',color: '#fff',border: 'none',borderRadius: '4px',transition: 'background-color 0.3s'}}
        />
    </div>
    )
}