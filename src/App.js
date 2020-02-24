import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    searchVal: '',
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFilter}>
          <input value={this.state.searchVal} onChange={this.handleInputChange}/>
          <button type="button" onClick={this.handleClear}>Clear</button>
          <button type="submit">Filter</button>
        </form>
      </div>
    )
  }

  handleClear = () => {
    this.setState({searchVal: ''})
  };

  handleFilter = (event) => {
    event.preventDefault();
    alert(this.state.searchVal);
  };

  handleInputChange = (event) => {
    this.setState({searchVal: event.target.value})
  };
}

export default App;
