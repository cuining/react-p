import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { transform } from 'babel-standalone';
import PropTypes from 'prop-types'

export default class WorkSpace extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.renderPlayer()
    }
  }

  componentDidMount() {
    window.require = this.require

    this.renderPlayer()
  }

  renderPlayer() {
    const code = transform(this.props.value, { presets: ['es2015', 'react'] }).code
    new Function(code).call(null, React)
  }

  require = (name) => {
    if (name === 'react') {
      return React
    }
    if (name === 'react-dom') {
      return ReactDOM
    }
  }

  render() {
    return (
      <div className="player" id="player" ref={ref => this.player = ref} />
    )
  }
}
