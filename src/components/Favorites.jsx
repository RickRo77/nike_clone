// src/Favorites.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../actions/favoritesActions';
import ProductCard from './ProductCard';

function Favorites(){
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    console.log(productId)
    dispatch(removeFromFavorites(productId));
  };

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="product-list">
        {favorites.map(product => (
          <div key={product.id}>
            <ProductCard product={product}/>
            {/* <div>{product.productName}</div> */}
            {/* {console.log(product.id)} */}
            <button onClick={() => {dispatch(removeFromFavorites(product.articleNo));}}>Remove from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
