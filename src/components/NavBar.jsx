'use strict'
/**
 * Importante agregar key en el li
 */
import React from 'react'

var NavBar = React.createClass({
  render: () => {
    var pages = ['Home', 'Acerca', 'Servicios', 'Blog', 'Contacto']
    var navLinks = pages.map((page, index) => {
      return (
        <a key={index} href={'/' + page} >{page}</a>
      )
    })
    return <nav>{navLinks}</nav>
  }
})
module.exports = NavBar
