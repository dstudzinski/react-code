import React from 'react';

import {Text} from "./Text";
import './App.css';

import {LangSwitcher} from "./LangSwitcher";
import {LanguageContext, languages} from "./ContextLanguages";

class App extends React.Component{
  state = {
    language: languages.PL
  };

  render() {
    return (
      <LanguageContext.Provider value={{language: this.state.language, setLanguage: this.setLanguage}}>
        <div className="App">
          <LangSwitcher/>
          <Text/>
        </div>
      </LanguageContext.Provider>
    );
  }

  setLanguage = language => this.setState({language})
}

export default App;
