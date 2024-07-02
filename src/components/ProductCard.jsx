// src/ProductCard.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../actions/favoritesActions';

function ProductCard({ product}){
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h2>{product.productName}</h2>
      <img src={product.imageUrl} alt={product.productName} style={{ width: '200px' }} />
      <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Country:</strong> {product.country}</p>
      <p><strong>Division:</strong> {product.division}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Sub-Category:</strong> {product.subCategory}</p>
      <p><strong>List Price:</strong> {product.currency} {product.listPrice}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <a href={product.url} target="_blank" rel="noopener noreferrer">View Product</a>
      <button onClick={()=>{handleAddToFavorites(product)}}>Add to Favorites</button>
    </div>
  );
};

export default ProductCard;
