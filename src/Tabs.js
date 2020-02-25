import React from "react";

class Tabs extends React.Component {
  render() {
    const filteredTabs = React.Children.toArray(this.props.children).filter(child => child.type.displayName === 'Tab');

    return (
      <div>
        <div>Select tab: {this.getTabsButtons(filteredTabs)}</div>
        <div>
          {filteredTabs.filter(tab => tab.props.id === this.props.tabSelected)}
        </div>
      </div>
    )
  }

  getTabsButtons = tabs => {
    return tabs.map(tab => {
      return (
        <button onClick={() => this.props.onTabSelect(tab.props.id)}>{tab.props.id}</button>
      )
    })
  }
}

export {
  Tabs,
}
