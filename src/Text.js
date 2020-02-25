import React from "react";

import {LanguageContext, languages} from './ContextLanguages'

const TRANSLATION = {
  [languages.PL]: 'Czesc',
  [languages.EN]: 'Hello',
};

function Text() {
  return (
    <LanguageContext.Consumer>
      {
        language => (<p>{TRANSLATION[language]}</p>)
      }
    </LanguageContext.Consumer>
  )
}

export {
  Text,
}