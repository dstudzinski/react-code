import React from 'react';

import {Tab} from "./Tab";
import {Tabs} from "./Tabs";
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <button>Some</button>
      </Tabs>
    </div>
  );
}

export default App;
