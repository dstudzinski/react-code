import React from 'react';
import {Counter} from "./Counter";
import {Text} from "./Text";
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    showCounter: true,
  };

  render() {
    return (
      <div>
        {this.state.showCounter && <Counter counter={this.state.counter} onClick={this.handleClick}/>}
        {/*{this.showCounter ? <Counter/> : undefined}*/}
        <button onClick={this.handleToggle}>Toggle</button>
        <Text>Some text</Text>
      </div>
    )
  }

  handleToggle = () => this.setState(state => ({showCounter: !state.showCounter}));
  handleClick = () => this.setState(state => ({counter: state.counter + 1}));
}

export default App;
