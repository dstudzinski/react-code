import React from "react";

import {LanguageContext, languages} from './ContextLanguages'

const TRANSLATION = {
  [languages.PL]: 'Czesc',
  [languages.EN]: 'Hello',
};

class Text extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <p>{TRANSLATION[this.context.language]}</p>
    )
  }
}

export {
  Text,
}