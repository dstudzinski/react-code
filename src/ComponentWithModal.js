import React from "react";

import './ComponentWithModal.css';

class ComponentWithModal extends React.Component {
  state = {
    showModal: false,
  }

  render() {
    return (
      <div>
        Some component with modal <button onClick={this.handleOpen}>Open</button>
        {this.state.showModal && <div className="ComponentWithModal__modal">Modal content <button onClick={this.handleClose}>Close</button></div>}
      </div>
    )
  }

  handleOpen = () => {
    this.setState({showModal: true})
  }

  handleClose = () => {
    this.setState({showModal: false})
  }
}

export {
  ComponentWithModal
}