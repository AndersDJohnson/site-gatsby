import React from 'react'
import markdown from '../utils/markdown'

export default class Markdown extends React.Component {
  render () {
    if (!this.props.source) return null
    return <div dangerouslySetInnerHTML={{__html: markdown(this.props.source)}} />
  }
}
