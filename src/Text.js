import React from 'react';

// class Text extends React.Component {
class Text extends React.PureComponent { // same like React.memo for function components
  render() {
    console.log('render');
    return (
      <p>{this.props.children}</p>
    )
  }

  componentDidMount() {
    console.log('mounted');
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (nextProps.children === this.props.children) {
  //     return false;
  //   }
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('updated');
  }
}

export {
  Text
}