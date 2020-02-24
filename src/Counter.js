import React from "react";

class BrokenCounter extends React.Component {
  state = {
    counter: 0,
  }

  render() {
    if (this.state.counter > 5) {
      throw new Error('Max counter!');
    }

    return (
      <div>Counter: {this.state.counter} <button onClick={this.handleClick}>Add</button></div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  handleClick = () => {
    this.setState(state => ({counter: this.state.counter + 1}))
  }
}

export {
  BrokenCounter,
}