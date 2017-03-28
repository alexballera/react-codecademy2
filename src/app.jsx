'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Child from './components/Child.jsx'

export default () => {
  var Parent = React.createClass({
    getInitialState: function () {
      return {name: 'Alexander'}
    },
    changeName: function (newName) {
      this.setState({
        name: newName
      })
    },
    render: function () {
      return (
        <Child
          name={this.state.name} onChange={this.changeName}
        />
      )
    }
  })
  ReactDOM.render(
    <Parent />,
    document.getElementById('app')
  )
}
