import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    searchVal: '',
    loading: true,
    posts: undefined,
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFilter}>
          <input value={this.state.searchVal} onChange={this.handleInputChange}/>
          <button type="button" onClick={this.handleClear}>Clear</button>
          <button type="submit">Filter</button>
        </form>
        <div>{this.state.loading && 'Loading...'}</div>
        <div>{!this.state.loading && JSON.stringify(this.state.posts)}</div>
        {/* TODO - render list here with PostItem component and key used properly :) */}
      </div>
    )
  }

  componentDidMount() {
    this.fetchPosts();
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

  fetchPosts = () => {
    this.setState({loading: true});
    // code to make actual fetch should be separated from code which sets state (and component)
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(sleep(2000))
      .then(posts => {
        this.setState({loading: false, posts,})
      });
  }
}

function sleep(delay) {
  return data => new Promise((res, rej) => setTimeout(() => res(data), delay))
}

export default App;
