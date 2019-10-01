import React from 'React';
import $ from 'jquery';
import './css/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    //binding
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(e) {
    this.setState({ input: e.target.value })
  }

  handleSubmit(e) {
      this.props.getPoke(this.state.input, (pokemon) => {
        $('.search-bar').val('');
        this.setState({input: ''});
      })
  }

  render() {
    return (
      <div className="search-outer">
        <span className="search-main">
          <input className="search-bar" onChange={this.handleTextChange} onKeyDown={(e)=> {if(e.key === 'Enter') {this.handleSubmit()}}}></input>
          <button className="search-button" onClick={this.handleSubmit}>Search</button>
        </span>


      </div>
    )
  }
}


export default SearchBar;