import React from "react";

class Tabs extends React.Component {
  state = {
    value: 'costam'
  }

  modifyValue = newValue => {
    this.setState({value: newValue})
  }

  render() {
    const filteredTabs = React.Children.toArray(this.props.children).filter(child => child.type.displayName === 'Tab');
    const selectedTabCmp = filteredTabs.filter(tab => tab.props.id === this.props.tabSelected)[0];

    const zm = 'costam'
    return (
      <div>
        <div>Select tab: {this.getTabsButtons(filteredTabs)}</div>
        <div>
          {
            React.cloneElement(selectedTabCmp, {setcostam: this.modifyValue})
          }
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
