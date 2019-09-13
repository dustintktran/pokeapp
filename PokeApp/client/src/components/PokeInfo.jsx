import React from 'react';
import './css/PokeInfo.css';

class PokeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="pokemon-outer">
        <div className="pokemon-top">
          <img className="pokemon-image" src={this.props.pokemon.sprites.front_default}></img>
          <div className="pokemon-filler"></div>
        </div>
        <div className="pokemon-bottom">
          <div className="pokemon-info">
            {this.props.pokemon.name}
          </div>
        </div>
        {/*========== ^ UNDERNEATH ^ ==========*/}
        <div className="pokemon-overlay">
          <img className="pokemon-overlay-image" src={this.props.pokemon.sprites.front_default}></img>
          <div className="pokemon-overlay-bottom">
            <br/><br/><br/>
            {this.props.pokemon.id} <br/>

            Type:  <br/>
          </div>
        </div>  
      </div>
    )
  }
}
export default PokeInfo;