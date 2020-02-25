import React from 'react';

import {Text} from "./Text";
import './App.css';

import {LanguageContext, languages} from "./ContextLanguages";

function App() {
  return (
    <LanguageContext.Provider value={languages.PL}>
      <div className="App">
        <Text/>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
