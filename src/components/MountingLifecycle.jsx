/**
 * componentWillMount hace que esto se ejecute una sola vez
 */
'use strict'
import React from 'react'

var MountingLifecycle = React.createClass({
  componentWillMount: function () {
    alert('Primera vez MountingLifecycle!')
  },
  render: function () {
    alert('Renderizando MountingLifecycle!')

    alert('Terminado de Renderizar MountingLifecycle!!!!!!!');

    return (
      <h1 style={{color: this.props.color}} >ESTE ES EL EJEMPLO DE MOUNTING LIFECYCLE</h1>
    )
  }
})
export default MountingLifecycle
