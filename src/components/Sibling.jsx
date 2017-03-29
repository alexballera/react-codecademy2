'use strict'

import React from 'react'
import {Row} from 'react-materialize'

var Sibling = React.createClass({
  render: function () {
    var name = this.props.name
    var styles = {
      backgroundColor: '#d81b60',
      color: '#2196f3',
      marginTop: 50 // por defecto no se coloca px
    }
    return (
      <Row>
        <h1 style={{color: '#8e24aa'}}>Mi nombre es {name}</h1>
        <h2 style={styles}>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </Row>
    )
  }
})

module.exports = Sibling
