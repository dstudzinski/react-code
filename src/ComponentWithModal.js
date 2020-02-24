import React from "react";
import ReactDOM from 'react-dom';

import './ComponentWithModal.css';

class ComponentWithModal extends React.Component {
  domNode = document.createElement('div');

  state = {
    showModal: false,
  }

  render() {
    return (
      <div>
        Some component with modal <button onClick={this.handleOpen}>Open</button>
        {ReactDOM.createPortal(this.getModal(), this.domNode)}
      </div>
    )
  }

  componentDidMount() {
    this.props.renderInside.appendChild(this.domNode);
  }

  componentWillUnmount() {
    this.props.renderInside.removeChild(this.domNode);
  }

  getModal = () => {
    return (
      <div>
        {this.state.showModal && <div className="ComponentWithModal__modal">Modal content <button onClick={this.handleClose}>Close</button></div>}
      </div>
    )
  };

  handleOpen = () => {
    this.setState({showModal: true})
  };

  handleClose = () => {
    this.setState({showModal: false})
  };
}

export {
  ComponentWithModal
}