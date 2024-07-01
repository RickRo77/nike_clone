import React, { useState, useEffect } from 'react';
import products from '../data/products.json';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../actions/favoritesActions';

export default function MainDisp({ Filter }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const matchesFilters = (product) => {
      if (Filter.length === 0 || (Filter.length === 1 && Filter[0].size === 0)) {
        return true; // Return true if there are no filters
      }
      for (let filter of Filter) {
        for (let [key, value] of filter.entries()) {
          if(key==='search')
            {
              if(!product.productName.toLowerCase().includes(value.toLowerCase()))
                return false;
            }
          else if (product[key] !== value) {
            return false;
          }
        }
      }
      return true;
    };

    const newFilteredProducts = products.filter(matchesFilters);
    setFilteredProducts(newFilteredProducts);
  }, [Filter]);


  const dispatch = useDispatch();
  const handleAddToFavorites = (product) => {
    dispatch(addToFavorites(product));
  };

  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
            <h2>{product.productName}</h2>
            {/* <img src={product.imageUrl} alt={product.productName} style={{ width: '100px' }} /> */}
            <p><strong>Company:</strong> {product.company}</p>
            <p><strong>Country:</strong> {product.country}</p>
            <p><strong>Division:</strong> {product.division}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Sub-Category:</strong> {product.subCategory}</p>
            <p><strong>List Price:</strong> {product.currency} {product.listPrice}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">View Product</a>
            <button onClick={handleAddToFavorites(product)}>Add to Favorites</button>
          </div>
        ))
      ) : (
        <p>No products match the filters.</p>
      )}
    </div>
  );
}
