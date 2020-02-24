import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ComponentWithModal} from './ComponentWithModal'

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <ComponentWithModal/>
      </div>
      <ComponentWithModal/>
    </div>
  );
}

export default App;
