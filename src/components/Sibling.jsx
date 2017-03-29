'use strict'

import React from 'react'
import {Row} from 'react-materialize'

var Sibling = React.createClass({
  render: function () {
    var name = this.props.name
    return (
      <Row>
        <h1>Mi nombre es {name}</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </Row>
    )
  }
})

module.exports = Sibling
