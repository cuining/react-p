export default `import React, { Component } from 'react';
import { render } from 'react-dom';
class App extends Component {
  render() {
    return (
      <div>
        Welcome to React!
      </div>
    )
  }
}

render(<App />, document.getElementById('player'));
`
