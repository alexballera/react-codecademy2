'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Child from './components/Child.jsx'
import Sibling from './components/Sibling.jsx'
import { Row } from 'react-materialize'

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
        <Row>
          <Child
            onChange={this.changeName}
          />
          <Sibling name={this.state.name} />
        </Row>
      )
    }
  })
  ReactDOM.render(
    <Parent />,
    document.getElementById('app')
  )
}
