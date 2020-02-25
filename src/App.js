import React from 'react';

import {Text} from "./Text";
import './App.css';

import {LangSwitcher} from "./LangSwitcher";
import {LanguageContext, languages} from "./ContextLanguages";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      languageContext: {
        language: languages.PL,
        setLanguage: this.setLanguage
      }
    };
  }

  render() {
    return (
      <LanguageContext.Provider value={this.state.languageContext}>
        <div className="App">
          <LangSwitcher/>
          <Text/>
        </div>
      </LanguageContext.Provider>
    );
  }

  setLanguage = language => this.setState(state => ({languageContext: {...state.languageContext, language}}))
}

export default App;
