import React from "react";

class Tabs extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export {
  Tabs,
}
