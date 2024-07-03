import React, { useState, useEffect } from 'react';
import products from '../data/products.json';
// import { useDispatch } from 'react-redux';
// import { addToFavorites } from '../actions/favoritesActions';
import ProductCard from './ProductCard';

export default function MainDisp({ Filter }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const matchesFilters = (product) => {
      if(Filter.category.length==0 || Filter.category.includes(product.category))
        {
          if(Filter.division.length==0 || Filter.division.includes(product.division))
            {
              if(Filter.subCategory.length==0 || Filter.subCategory.includes(product.subCategory))
                {
                  if(Filter.search.length==0 || product.productName.toLowerCase().includes(Filter.search[0].toLowerCase()))
                    return true;
                }
            }
        }
      else
        return false
    };

    const newFilteredProducts = products.filter(matchesFilters);
    setFilteredProducts(newFilteredProducts);
  }, [Filter]);


  return (
    <div style={{width:'70vw'}}>
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
