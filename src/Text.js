import React from 'react';

class Text extends React.Component {
  render() {
    console.log('render');
    return (
      <p>{this.props.children}</p>
    )
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('updated');
  }
}

export {
  Text
}