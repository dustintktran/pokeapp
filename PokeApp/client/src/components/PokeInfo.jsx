import React from 'react';

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
          <img className="pokemon-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"></img>
          <div className="pokemon-filler"></div>
        </div>
        <div className="pokemon-bottom">
          <div className="pokemon-info">
            Scizor
          </div>
        </div>
        {/*========== ^ UNDERNEATH ^ ==========*/}
        <div className="pokemon-overlay">
          <img className="pokemon-overlay-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"></img>
          <div className="pokemon-overlay-info">

          </div>
        </div>  
      </div>
    )
  }
}
export default PokeInfo;