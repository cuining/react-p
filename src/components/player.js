import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { transform } from 'babel-standalone'
import PropTypes from 'prop-types'

const prefix = `
  import { render } from 'react-dom'
  `
const suffix = `
  render(<App />, document.getElementById('player'))
  `

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
    try {
      const code = transform(prefix + this.props.value + suffix, {
        presets: ['es2015', 'react']
      }).code
      console.log(code)
      new Function(code).call(null, React)
    } catch (e) {}
  }

  componentDidUpdate() {
    this.renderPlayer()
  }

  require(name) {
    if (name === 'react') {
      return React
    }
    if (name === 'react-dom') {
      return ReactDOM
    }
  }

  render() {
    const { playerPanel } = this.props
    return playerPanel
      ? React.cloneElement(playerPanel, { id: 'player' })
      : <div className="player" id="player" />
  }
}
