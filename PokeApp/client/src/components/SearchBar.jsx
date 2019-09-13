import React from 'React';
import './css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    //binding
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <div className="search-outer">
        <span className="search-main">
          <input className="search-bar" onChange={this.handleTextChange}></input>
          <button className="search-button" onClick={() => {this.props.getPoke(this.state.input, (pokemon) => console.log(pokemon.name))}}>Search</button>
          <div className="search-list">
            <div className="list-entry">{this.state.input}</div>

          </div>
          <div className="list-entry-filler"></div>
        </span>


      </div>
    )
  }
}


export default SearchBar;