import React from 'react';
import './css/FavBar.css';
import PokeInfo from './PokeInfo.jsx'

const FavBar = (props) => {
  return (
    <div className="favbar-outer">
      <div className="favbar-title">Favorites:</div>
      <div className="favbar-pokemon">
        {Object.keys(props.favorites).map((item) => {
          return <PokeInfo pokemon={props.favorites[item]} handleFavorite={props.handleFavorite} isFav={true} />
        })}
      </div>
    </div>
  )
}

export default FavBar;