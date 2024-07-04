// src/ProductCard.jsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../actions/favoritesActions';

import { useSelector} from 'react-redux';
import { removeFromFavorites } from '../actions/favoritesActions';

function ProductCard({ product,parent}){
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));
  };

  return (
    <div className='ProductCard' style={{ border: '1px solid #ddd', padding: '10px', margin: '10px'}}>
      <h2>{product.productName}</h2>
      <img src={product.imageUrl} alt={product.productName} style={{ width: '90%' }} />
      {/* <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Country:</strong> {product.country}</p> */}
      <p><strong>Division:</strong> {product.division}</p>
      <p><strong>Product Type:</strong> {product.category}</p>
      <p><strong>For:</strong> {product.subCategory}</p>
      <p><strong>Price:</strong> {product.currency} {product.listPrice}</p>
      {/* <p><strong>Description:</strong> {product.description}</p> */}
      {/* <a href={product.url} target="_blank" rel="noopener noreferrer">View Product</a> */}
      <button style={{padding:'10px'}}>Buy Now</button>
      {(parent==='MainDisp')?<button style={{padding:'10px',marginLeft:'10px'}} onClick={()=>{handleAddToFavorites(product)}}>Add to Favorites</button>:<button style={{padding:'10px',marginLeft:'10px'}} onClick={() => {dispatch(removeFromFavorites(product.articleNo));}}>Remove from Favorites</button>}
    
    </div>
  );
};

export default ProductCard;
