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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.children === this.props.children) {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('updated');
  }
}

export {
  Text
}