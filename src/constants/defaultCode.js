export default `import React, { Component } from 'react';
import { render } from 'react-dom';
class App extends Component {
  render() {
    return (
      <div className="demo">
        Welcome to React!
        <style>{\`
          .demo {
            color: red
          }
        \`}</style>
      </div>
    )
  }
}

render(<App />, document.getElementById('player'));
`
