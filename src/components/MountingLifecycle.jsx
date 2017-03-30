/**
 * componentWillMount hace que esto se ejecute una sola vez
 */
'use strict'
import React from 'react'

var MountingLifecycle = React.createClass({
  componentWillMount: function () {
    console.log('Primera vez MountingLifecycle!')
  },

  componentDidMount: function () {
    console.log('Terminado de Renderizar MountingLifecycle!')
  },

  render: function () {
    console.log('Renderizando MountingLifecycle!')

    return (
      <h1 style={{color: this.props.color}} >ESTE ES EL EJEMPLO DE MOUNTING LIFECYCLE</h1>
    )
  }
})
export default MountingLifecycle
