import React from 'react';

import {CursorObserver} from "./CursorObserver";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* children as a function */}
      <CursorObserver>
        {
          (clientX, clientY) => (<div>clientX: {clientX}, clientY: {clientY}</div>)
        }
      </CursorObserver>
    </div>
  );
}

export default App;
