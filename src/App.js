import React, {useReducer, useState} from 'react';

import './App.css';
import Counter from "./Counter";
import Lifecycle from "./Lifecycle";
import FetchData from "./FetchData";

function App() {
  const setRefresh = useReducer(x => x + 1, 0)[1];
  const [showLifecycle, setShowLifecycle] = useState(true);

  return (
    <div className="App">
      <Counter/>
      <br/>
      <br/>
      <button onClick={setRefresh}>Refresh lifecycle</button><button onClick={() => setShowLifecycle(false)}>Hide lifecycle</button><br/>
      {showLifecycle && <Lifecycle/>}
      <br/>
      <br/>
      <FetchData/>
    </div>
  );
}

export default App;
