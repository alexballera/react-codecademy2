'use strict'
import React from 'react'

var Saludar = React.createClass({
  render: function () {
    return <h1>Saludos usando Props!, Hola {this.props.nombre}</h1>
  }
})
module.exports = Saludar
