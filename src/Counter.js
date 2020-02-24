import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        Counter: {this.state.counter}<br/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleClick = () => this.setState(state => ({counter: state.counter + 1}))
}

export {
  Counter
}