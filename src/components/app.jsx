'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Row } from 'react-materialize'
import Child from './Child.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MaterialUIReactComponent from './MaterialUIComponent.jsx'
import Sibling from './Sibling.jsx'
import Formulario from './Formulario.jsx'
import StatelessFunctionalComponent from './StatelessFunctionalComponent.jsx'
import MountingLifecycle from './MountingLifecycle.jsx'

export default () => {
  var Parent = React.createClass({
    getInitialState: function () {
      return {name: 'Alexander'}
    },
    changeName: function (newName) {
      this.setState({
        name: newName
      })
    },
    render: function () {
      return (
        <Row>
          <Child
            onChange={this.changeName}
          />
          <Sibling name={this.state.name} />
          <MuiThemeProvider>
            <MaterialUIReactComponent />
          </MuiThemeProvider>
          <StatelessFunctionalComponent />
          <Formulario />
        </Row>
      )
    }
  })
  ReactDOM.render(
    <Parent />,
    document.getElementById('app')
  )
  ReactDOM.render(
    <MountingLifecycle color='red' />,
    document.getElementById('MountingLifecycle')
  )
  setTimeout(function () {
    ReactDOM.render(
      <MountingLifecycle color='green' />,
      document.getElementById('MountingLifecycle')
    )
  }, 3000)
}
