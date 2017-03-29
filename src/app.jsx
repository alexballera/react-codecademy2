'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import Child from './components/Child.jsx'
import Sibling from './components/Sibling.jsx'
import { Row } from 'react-materialize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MaterialUIReactComponent from './components/MaterialUIComponent.jsx'

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
        </Row>
      )
    }
  })
  ReactDOM.render(
    <Parent />,
    document.getElementById('app')
  )

  var StatelessFunctionalComponent = function () {
    return <img src='https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-octopus.jpg' style={{width: '100%'}} />
  }
  ReactDOM.render(
    <StatelessFunctionalComponent />,
    document.getElementById('statelessFunctional')
  )
}
