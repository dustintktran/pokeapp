import React from 'react';
import PokeInfo from './PokeInfo.jsx';
import SearchBar from './SearchBar.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: {},
      currentPokemon: null
    }
    this.getPokemon = this.getPokemon.bind(this);
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

  render() {
    return (
      <div className="main">
        PokeFinder
        <SearchBar getPoke={this.getPokemon}/>
        {Object.keys(this.state.pokeList).map((pokemon) => {
          return ( <PokeInfo pokemon={this.state.pokeList[pokemon]} /> )
        })}
      </div>
    )
  }
}

//<div>{this.state.pokeList[pokemon].name}</div>

export default App;