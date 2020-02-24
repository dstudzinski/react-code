import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
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
    this.setState(state => ({
      counter: state.counter + 1,
    }));
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  }

  // https://stackoverflow.com/a/53316560
  // handleClickAutobound = () => {
  //   this.setState(state => ({
  //     counter: state.counter + 1,
  //   }));
  //   this.setState(state => ({
  //     counter: state.counter + 1,
  //   }));
  // }
}

export {
  App,
}
