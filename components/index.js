import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from './editor'
import Player from './player'
import defaultCode from '../constants/defaultCode'

export default class WorkSpace extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: defaultCode
    }
  }

  handleCodeChange = code => {
    this.setState({ code })
  }

  render() {
    const { code } = this.state
    return (
      <main>
        <Editor value={code} onChange={this.handleCodeChange}></Editor>
        <Player value={code}></Player>
      </main>
    )
  }
}
