'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar.jsx'
import Saludar from './components/Saludar.jsx'
import Saludando from './components/Saludando.jsx'
import Button from './components/Button.jsx'

module.exports = () => {
  ReactDOM.render(
    <h1>Hola Mundo</h1>,
    document.getElementById('basico')
  )
  ReactDOM.render(
    <div>
      <h2>Este es un subtitulo</h2>
      <p>Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Adipisci, quibusdam?
      </p>
    </div>,
    document.getElementById('bloque')
  )
  // Componentes
  var Titulo = React.createClass({
    render: function () {
      return (
        <div>
          <h1>Componente Básico Con Barra De Navegación</h1>
          <NavBar />
        </div>
      )
    }
  })

  ReactDOM.render(
    <Titulo />,
    document.getElementById('componente-basico')
  )

  // Component class
  var friends = [
    {
      title: 'Yummmmmmm',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg'
    },
    {
      title: 'Hey Guys!  Wait Up!',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg'
    },
    {
      title: 'Yikes',
      src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg'
    }
  ]

  var Friend = React.createClass({
    render: function () {
      var friend = friends[2]
      return (
        <div>
          <h1>{friend.title}</h1>
          <img src={friend.src} width='200' />
        </div>
      )
    }
  })

  ReactDOM.render(
    <Friend />,
    document.getElementById('component-class')
  )

  // Uso de condicionales
  var fiftyFifty = Math.random() < 0.5
  console.log(fiftyFifty)

  var TodaysPlan = React.createClass({
    render: function () {
      var task
      if (!fiftyFifty) {
        task = 'out'
      } else {
        task = 'to bed'
      }
      return <h1>Tonight I'm going {task} WOOO</h1>
    }
  })
  ReactDOM.render(
    <TodaysPlan />,
    document.getElementById('TodaysPlan')
  )

  // Uso de Props
  var ComponenteProps = React.createClass({
    render: function () {
      return (
        <Saludar nombre='Alex Ballera' />
      )
    }
  })
  ReactDOM.render(
    <ComponenteProps />,
    document.getElementById('componente-props')
  )

  /**
   * Uso de Props y Modulado
   */

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <h1>
            Hullo and, 'Welcome to The Newzz,' 'On Line!'
          </h1>
          <Saludando name='Alex Ballera' signedIn />
          <article>
            Latest:  where is my phone?
          </article>
        </div>
      )
    }
  })

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )

  /**
   * Event handler function, se agrega dentro de createClass
   * por convencións e nombra handler + evento, p.e handlerClick
   */
  var Talker = React.createClass({
    handleClick: function () {
      for (var speech = '', i = 0; i < 10000; i++) {
        speech += 'Blah'
      }
      alert(speech)
    },

    render: function () {
      return <Button onClick={this.handleClick} />
    }
  })
  ReactDOM.render(
    <Talker />,
    document.getElementById('eventHandler')
  )

  var State = React.createClass({
    getInitialState: function () {
      return {title: 'Titulo con State'}
    },
    render: function () {
      return (
        <h1>{this.state.title}</h1>
      )
    }
  })
  ReactDOM.render(
    <State />,
    document.getElementById('state')
  )
  var green = '#39D1B4'
  var yellow = '#FFD712'

  var Toggle = React.createClass({
    getInitialState: function () {
      return {color: green}
    },
    changeColor: function () {
      var newColor = this.state.color === green ? yellow : green
      this.setState({color: newColor})
    },
    render: function () {
      return (
        <div style={{background: this.state.color}}>
          <button onClick={this.changeColor} >
            Change Color
          </button>
        </div>
      )
    }
  })
  ReactDOM.render(
    <Toggle />,
    document.getElementById('state-toggle')
  )

}
