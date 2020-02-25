import React from "react";

class Tabs extends React.Component {
  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children).filter(child => child.type.displayName === 'Tab')}
      </div>
    )
  }
}

export {
  Tabs,
}
