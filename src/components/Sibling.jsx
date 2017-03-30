'use strict'

import React from 'react'
import {Row} from 'react-materialize'
import style from './Style.jsx'

class Sibling extends React.Component {
  render () {
    var name = this.props.name
    var styles = {
      backgroundColor: '#d81b60',
      color: '#2196f3',
      marginTop: 50 // por defecto no se coloca px
    }

    var styleH2 = {
      backgroundColor: style.blue,
      color: style.red
    }
    return (
      <Row>
        <h1 style={{color: '#8e24aa'}}>Mi nombre es {name}</h1>
        <h2 style={styles}>Don't you think {name} is the prettiest name ever?</h2>
        <h2 style={styleH2}>Sure am glad that my parents picked {name}!</h2>
      </Row>
    )
  }
}

module.exports = Sibling
