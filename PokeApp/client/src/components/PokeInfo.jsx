import React from 'react';
import './css/PokeInfo.css';

class PokeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
  }

  capitalizeFirstLetter(string) {
    let firstLetter = string[0];
    
    console.log(string.substring(1,7))
    return (firstLetter.toUpperCase() + string.substring(1,string.length));
  }

  render() {
    let { id, name, abilities, forms, moves, stats, types, sprites } = this.props.pokemon
    return (
      <div className="pokemon-outer">
        <div className="pokemon-top">
          <img className="pokemon-image" src={sprites.front_default}></img>
          <div className="pokemon-filler"></div>
        </div>
        <div className="pokemon-bottom">
          <div className="pokemon-info">
            {name}
          </div>
        </div>
        {/*========== ^ UNDERNEATH ^ ==========*/}
        <div className="pokemon-overlay">
          <img className="pokemon-overlay-image" src={sprites.front_default}></img>
          <div className="pokemon-overlay-bottom">
            <br/><br/><br/>
            ID: {id} <br/>
            Name: {name} <br/>
            {types.length === 1 && <span>Type: {this.capitalizeFirstLetter(types[0].type.name)}</span>}
            {types.length >= 2 && <span>Types: {this.capitalizeFirstLetter(types[0].type.name)} | {this.capitalizeFirstLetter(types[1].type.name)}</span>}
            <br/>
            <div className="stats-outer">
              <div className="stats-row">
                HP: {stats.hp} Atk: {stats.attack} Def: {stats.defense}
              </div>
              <div className="stats-row">
                Spd: {stats['special-defense']} SpA: {stats['special-attack']} SpD: {stats.speed}
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}
export default PokeInfo;