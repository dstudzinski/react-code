import React from 'react';
import {Counter} from "./Counter";
import './App.css';

class App extends React.Component {
  state = {
    showCounter: true,
  };

  render() {
    return (
      <div>
        {this.state.showCounter && <Counter/>}
        {/*{this.showCounter ? <Counter/> : undefined}*/}
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }

  handleToggle = () => this.setState(state => ({showCounter: !state.showCounter}))
}

export default App;
