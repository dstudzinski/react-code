import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
    value: ''
  };

  inputRef = React.createRef();

  render() {
    return (
      <div>
        <input ref={this.inputRef} value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = event => this.setState({value: event.target.value})
}

export default App;
