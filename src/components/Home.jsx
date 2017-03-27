/**
 * Módulo Home
 */
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import Bienvenido from './components/Bienvenido.jsx'

var Home = React.createClass({
  render: function () {
    return <Bienvenido name='Ludwing Van Beethoven' />
  }
})

ReactDOM.render(
  <Home />,
  document.getElementById('app')
)
