'use strict'

import React from 'react'

var Child = React.createClass({
  handleChange: function (e) {
    var name = e.target.value
    this.props.onChange(name)
  },
  render: function () {
    return (
      <div>
        <h1>Mi nombre es {this.props.name}</h1>
        <select id='great-names' onChange={this.handleChange}>
          <option value='Alexander'>Alexander</option>
          <option value='Jose'>Jose</option>
          <option value='Ballera'>Ballera</option>
        </select>
      </div>
    )
  }
})
module.exports = Child
