import React, { useState, useEffect } from 'react';
import products from '../data/products.json';
// import { useDispatch } from 'react-redux';
// import { addToFavorites } from '../actions/favoritesActions';
import ProductCard from './ProductCard';

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


  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={index}>
            <ProductCard product={product}></ProductCard>
          </div>
        ))
      ) : (
        <p>No products match the filters.</p>
      )}
    </div>
  );
}
