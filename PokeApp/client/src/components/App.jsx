import React from 'react';
import PokeInfo from './PokeInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <div>
        <PokeInfo />

      </div>
    )
  }
}

export default App;