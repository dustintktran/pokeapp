import React from 'react';
import PokeInfo from './PokeInfo.jsx';
import SearchBar from './SearchBar.jsx';
import FavBar from './FavBar.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: {},
      pokeList: {},
      currentPokemon: null
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    $.get('/api/getFavorites', (array) => {
      console.log(array)
      let pokeList = {};
      for(var i = 0; i < array.length; i++) {
        pokeList[array[i].name] = array[i];
      }
      this.setState({favorites: pokeList});
    })
  }

  getPokemon(nameOrId, callback) {
    if(!this.state.pokeList[nameOrId]) {
      $.post('/api/find', {pokemon: nameOrId})
      .then((pokemon) => {
          let oldPokeList = this.state.pokeList;
          oldPokeList[pokemon.name] = pokemon;
          this.setState({pokeList: oldPokeList, currentPokemon: pokemon})
          callback(pokemon);
        }
      )
    } else {
      alert('pokemon already added')
    }
  }

  handleFavorite(pokemon, callback) {
    if(!this.state.favorites[pokemon.name]) {
      let oldFavs = this.state.favorites;
      oldFavs[pokemon.name] = pokemon;
      $.post('/api/addfavorite', {pokemon: pokemon.name});
      //add pokemon to fav in db
      this.setState({favorites: oldFavs});
    } else {
      let oldFavs = this.state.favorites;
      delete oldFavs[pokemon.name];
      $.post('/api/removefavorite', {pokemon: pokemon.name});
      //remove pokemon from fav in db
      this.setState({favorites: oldFavs});
    }
  }

  render() {
    return (
      <div className="main">
        PokeFinder
        <SearchBar getPoke={this.getPokemon}/>
        {Object.keys(this.state.pokeList).map((pokemon) => {
          if(this.state.favorites[pokemon]) {
            return ( <PokeInfo pokemon={this.state.pokeList[pokemon]} handleFavorite={this.handleFavorite} isFav={true}/> )
          } else {
            return ( <PokeInfo pokemon={this.state.pokeList[pokemon]} handleFavorite={this.handleFavorite} isFav={false}/> )
          }
        })}
        
        <FavBar favorites={this.state.favorites} handleFavorite={this.handleFavorite} isFav={true}/>
        {/* {Object.keys(this.state.favorites).map((item) => {
          return <div>{item}</div>
        })} */}
      </div>
    )
  }
}

//<div>{this.state.pokeList[pokemon].name}</div>

export default App;