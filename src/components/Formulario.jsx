'use strict'
import React from 'react'
import { Row, Input } from 'react-materialize'

var Formulario = React.createClass({
  getInitialState: function () {
    return {userInput: ''}
  },

  handleChange: function (e) {
    this.setState({
      userInput: e.target.value
    })
  },

  render: function () {
    return (
      <Row>
        <Input
          s={12}
          label='Nombre'
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange} />
        <h1>{this.state.userInput}</h1>
      </Row>
    )
  }
})
module.exports = Formulario
