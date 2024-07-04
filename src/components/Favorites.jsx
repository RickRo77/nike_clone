// src/Favorites.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../actions/favoritesActions';
import ProductCard from './ProductCard';

function Favorites(){
  const favorites = useSelector(state => state.favorites.favorites);
  // const dispatch = useDispatch();

  return (
    <div className="favorites-page" style={{height:'83vh',overflowY:'scroll',display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly'}}>
        {favorites.map(product => (
          <div key={product.id}>
            <ProductCard product={product} parent={'Favorites'}/>
            {/* <div>{product.productName}</div> */}
            {/* {console.log(product.id)} */}
            {/* <button onClick={() => {dispatch(removeFromFavorites(product.articleNo));}}>Remove from Favorites</button> */}
          </div>
        ))}
      </div>
  );
};

export default Favorites;
