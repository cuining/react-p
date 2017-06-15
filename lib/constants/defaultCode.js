"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "import React, { Component } from 'react';\nimport { render } from 'react-dom';\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"demo\">\n        Welcome to React!\n        <style>{`\n          .demo {\n            color: red\n          }\n        `}</style>\n      </div>\n    )\n  }\n}\n\nrender(<App />, document.getElementById('player'));\n";