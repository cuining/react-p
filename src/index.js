import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from './components/editor'
import Player from './components/player'
import defaultCode from './constants/defaultCode'
import './styles/base.css'

export default class WorkSpace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: this.props.value
    }
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }

  handleCodeChange(code) {
    this.setState({ code })
  }

  render() {
    const { code } = this.state
    const { readOnly, editorPanel, playerPanel } = this.props
    return (
      <main className="reactp">
        <Editor readOnly={readOnly} value={code} editorPanel={editorPanel} onChange={this.handleCodeChange}></Editor>
        <Player value={code} playerPanel={playerPanel}></Player>
      </main>
    )
  }
}

WorkSpace.propTypes = {
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  editorPanel: PropTypes.element,
  playerPanel: PropTypes.element,
}

WorkSpace.defaultProps = {
  value: defaultCode,
  readOnly: false
}
