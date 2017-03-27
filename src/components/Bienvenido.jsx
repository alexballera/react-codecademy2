/**
 * Modulo Bienvenido
 */
'use strict'
import React from 'react'

var Bienvenido = React.createClass({
  render: function () {
    if (this.props.name === 'Wolfgang Amadeus Mozart') {
      return (
        <h2> Hola, ¿cómo est'as?</h2>
      )
    } else {
      return (
        <h2>Bienvenido a mi Web Site!!!</h2>
      )
    }
  }
})

module.exports = Bienvenido
