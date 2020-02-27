import React, {Suspense} from 'react';

const First = React.lazy(() => import("./First"));
const Second = React.lazy(() => import("./SecondReexport"));

class App extends React.Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div>
        Open network tab and enable throttling before button click and check what will be downloaded after click<br/>
        <button onClick={this.handleShow}>Show components</button><br/>
        {this.state.show && (
          <div className="App">
            <Suspense fallback={'Loading...'}>
              <First/>
            </Suspense>
            <Suspense fallback={<First/>}>
              <Second/>
            </Suspense>
          </div>
        )}
      </div>
    )
  }

  handleShow = () => this.setState({show: true});
}

export default App;
