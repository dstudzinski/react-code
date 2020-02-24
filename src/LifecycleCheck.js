import React from 'react';

class LifecycleCheck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      mount: false,
    }
  }

  render() {
    return (
      <div>
        {this.state.mount && (
          <Cmp name="parent">
            <Cmp name="child">
              <Cmp name="child.child"/>
            </Cmp>
          </Cmp>
        )}
        <button onClick={() => this.setState(state => ({counter: state.counter + 1}))}>Trigger rerender</button><br/>
        {this.state.mount && <button onClick={() => this.setState({mount: false})}>Unmount</button>}
        {!this.state.mount && <button onClick={() => this.setState({mount: true})}>Mount</button>}
      </div>
    )
  }
}

class Cmp extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.name, 'constructor');
  }

  render() {
    console.log(this.props.name, 'render');

    return (
      <div>
        {this.props.name}
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.name, 'componentDidMount');
  }

  componentDidUpdate() {
    console.log(this.props.name, 'componentDidUpdate');
  }

  componentWillUnmount() {
    console.log(this.props.name, 'componentWillUnmount');
  }
}

export {
  LifecycleCheck
};
