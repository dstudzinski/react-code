import React from 'react';

import {CursorObserver} from "./CursorObserver";
import './App.css';

function App() {
  return (
    <div className="App">{/* render prop */}
      <CursorObserver onCursorMove={(clientX, clientY) => (<div>clientX: {clientX}, clientY: {clientY}</div>)}/>
    </div>
  );
}

export default App;
