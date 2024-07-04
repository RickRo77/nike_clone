import React, { useState, useEffect } from 'react';
import products from '../data/products.json';
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


  // const axios = require('axios');
  // const url = "https://iitgoffice-my.sharepoint.com/:u:/g/personal/p_niraj_iitg_ac_in/EeJ3ZEP8VARIpyqCJUw8n3EBuDG8Re3ISvui-gFOdbadIA?e=qh40jU";
  // axios.get(url)
  //   .then(response => {
  //       console.log(response.data);
  //   })
  //   .catch(error => {
  //       console.error('Error fetching the JSON data:', error);
  //   });

  return (
    <div style={{width:'80vw',overflowY:'scroll',display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly'}}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} parent={'MainDisp'}></ProductCard>
          </div>
        ))
      ) : (
        <p>No products match the filters.</p>
      )}
    </div>
  );
}
