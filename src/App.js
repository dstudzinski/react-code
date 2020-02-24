import React from 'react';

import './App.css';
import {ComponentWithModal} from './ComponentWithModal'

function App() {
  return (
    <div className="App">
      {/* modals mox can't be here because you can't render and get element with getElementById in the same render function
          you have to move getElementById to some child if you want to have modals box part of React app
      */}
      <div className="App__content">
        <ComponentWithModal renderInside={document.getElementById('modals')}/>
      </div>
      <ComponentWithModal renderInside={document.getElementById('modals')}/>
    </div>
  );
}

export default App;
