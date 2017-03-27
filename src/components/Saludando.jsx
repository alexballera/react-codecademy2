/**
 * El módulo Saludando evalúa 1 props (signedIn)
 * y dá respuesta con un props (name) y lo envía
 * a app.jsx quien importa este módulo
 */
'use strict'
import React from 'react'

var Saludando = React.createClass({
  render: function () {
    if (this.props.signedIn === false) {
      return <h1>SIGUE ADELANTE</h1>
    } else {
      return <h1>Hola, {this.props.name}!</h1>
    }
  }
})
module.exports = Saludando
