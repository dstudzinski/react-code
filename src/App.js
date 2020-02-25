import React from 'react';

import {CursorObserver} from "./CursorObserver";
import './App.css';

function App() {
  return (
    <div className="App">{/* render prop */}
      <CursorObserver onCursorMove={(clientX, clientY) => console.log({clientX, clientY})}/>
    </div>
  );
}

export default App;
