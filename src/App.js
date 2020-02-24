import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  // state = {
  //   counter: 0,
  // };

  render() {
    return (
      <div>
        Hej {this.state.counter}<br/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }

  handleClick() {
    // problems - missing bind, this.state used to read current state
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export {
  App,
}
