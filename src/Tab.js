import React from "react";

class Tab extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Tab.displayName = 'Tab';

export {
  Tab,
}
