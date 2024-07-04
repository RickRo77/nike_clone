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
            style={{width:'25vw',padding: '10px 15px',fontSize: '16px',backgroundColor:'#007bff',color: '#fff',border: 'none',borderRadius: '4px',transition: 'background-color 0.3s'}}
        />
    </div>
    )
}