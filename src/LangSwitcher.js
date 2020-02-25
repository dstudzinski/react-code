import React from "react";

import {LanguageContext, languages} from "./ContextLanguages";

class LangSwitcher extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <button onClick={() => this.context.setLanguage(languages.EN)}>Set EN</button>
        <button onClick={() => this.context.setLanguage(languages.PL)}>Set PL</button>
      </div>
    )
  }
}

export {
  LangSwitcher
}