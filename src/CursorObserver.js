import React from 'react';

class CursorObserver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientX: undefined,
      clientY: undefined,
    };
  }

  render() {
    return this.props.onCursorMove && this.props.onCursorMove(this.state.clientX, this.state.clientY);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      clientX: event.clientX,
      clientY: event.clientY,
    })
  };
}

export {
  CursorObserver
}
