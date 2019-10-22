import React from 'react';
import './css/SearchBar.css';

interface SearchBarProps {
  getPoke: (nameOrId: string | number, callback?: any ) => void,
}

const SearchBar: React.FC<SearchBarProps> = ({getPoke}) => {
  const [input, setInput] = React.useState('');

  const handleTextChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    getPoke(input, (pokemon) => {
      setInput('');
    })
  }

  return (
    <div className="search-outer">
    <span className="search-main">
      <input className="search-bar" onChange={handleTextChange} value={input} onKeyDown={(e)=> {if(e.key === 'Enter') {handleSubmit(e)}}}></input>
      <button className="search-button" onClick={handleSubmit}>Search</button>
    </span>


  </div>
  )
}

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     }
//     //binding
//     this.handleTextChange = this.handleTextChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleTextChange(e) {
//     this.setState({ input: e.target.value })
//   }

//   handleSubmit(e) {
//       this.props.getPoke(this.state.input, (pokemon) => {
//         $('.search-bar').val('');
//         this.setState({input: ''});
//       })
//   }

//   render() {
//     return (
//       <div className="search-outer">
//         <span className="search-main">
//           <input className="search-bar" onChange={this.handleTextChange} value={input} onKeyDown={(e)=> {if(e.key === 'Enter') {this.handleSubmit()}}}></input>
//           <button className="search-button" onClick={this.handleSubmit}>Search</button>
//         </span>


//       </div>
//     )
//   }
// }


export default SearchBar;