import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrokenCounter} from "./Counter";

class App extends React.Component {
  state = {
    error: undefined,
  };

  render() {
    return (
      <div>
        {this.state.error ? 'Something went wrong...' : <BrokenCounter/>}
      </div>
    )
  }

  componentDidCatch(error, errorInfo) {
    console.log({error, errorInfo})
  }

  // static keyword is important!
  static getDerivedStateFromError(error) {
    return {error}
  }
}

export default App;
