/**
 * stateless components
 */
'use strict'

import React from 'react'
import { Button, Row, Col, Icon } from 'react-materialize'

var Child = React.createClass({
  handleChange: function (e) {
    var name = e.target.value
    this.props.onChange(name)
  },
  render: function () {
    return (
      <Row>
        <h1>Mi nombre es {this.props.name}</h1>
        <Col s={6}>
          <select id='great-names' onChange={this.handleChange}>
            <option value='Alexander'>Alexander</option>
            <option value='Jose'>Jose</option>
            <option value='Ballera'>Ballera</option>
          </select>
        </Col>
        <Col s={3}>
          <Button waves='light'><Icon center>add</Icon></Button>
        </Col>
        <Col s={3}>
          <Button waves='light'><Icon right>remove</Icon></Button>
        </Col>
      </Row>
    )
  }
})
module.exports = Child
