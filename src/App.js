import React from 'react';

import {Tab} from "./Tab";
import {Tabs} from "./Tabs";
import './App.css';

class App extends React.Component {
  state = {
    tabSelected: 'first'
  };

  render() {
    return (
      <div className="App">
        <Tabs onTabSelect={this.handleTabSelect} tabSelected={this.state.tabSelected}>
          <Tab id="first">First</Tab>
          <Tab id="second">Second</Tab>
        </Tabs>
      </div>
    );
  }

  handleTabSelect = tabSelected => {
    this.setState({tabSelected})
  }
}

export default App;
