import React from 'react';

import {Text} from "./Text";
import './App.css';

import {LanguageContext, languages} from "./ContextLanguages";

class App extends React.Component{
  state = {
    language: languages.PL
  };

  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <div className="App">
          <Text/>
          <button onClick={() => this.setState({language: languages.EN})}>Set EN</button>
          <button onClick={() => this.setState({language: languages.PL})}>Set PL</button>
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
