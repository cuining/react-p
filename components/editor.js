import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { options, requireAddons } from '../constants/codemirrorConfig'
import 'codemirror/lib/codemirror.css'
import '../styles/react.css'

export default class Editor extends Component {
  static propsTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  componentDidMount() {
    const { onChange, readOnly, value } = this.props
    console.log(options);
    requireAddons()
    const Codemirror = require('codemirror')
    this.cm = Codemirror(this.editor, { ...options, readOnly })
    this.cm.on('changes', cm => { onChange && onChange(cm.getValue()) })
    this.cm.setValue(value)
  }

  render() {
    const { readOnly } = this.props
    return (
      <div className="editor" ref={ref => this.editor = ref} />
    )
  }
}
