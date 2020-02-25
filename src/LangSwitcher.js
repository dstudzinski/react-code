import React from "react";

import {LanguageContext, languages} from "./ContextLanguages";

function LangSwitcher() {
  return (
    <LanguageContext.Consumer>
      {
        ({language, setLanguage}) => (
          <div>
            <button onClick={() => setLanguage(languages.EN)}>Set EN</button>
            <button onClick={() => setLanguage(languages.PL)}>Set PL</button>
          </div>
        )
      }
    </LanguageContext.Consumer>
  )
}

export {
  LangSwitcher
}