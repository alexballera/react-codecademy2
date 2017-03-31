# Curso de React de Codecademy Con Materializecss Y Font Awesome

## Instalamos MaterializeCSS

Instalamos *Materializecss* y *JQuery* con **NPM** desde la terminal:

    npm i -S jquery materialize-css

Usamos con SASS:

    @import '../node_modules/materialize-css/sass/materialize';

Agregamos JQuery y Materializecss.js en js/vendors

    cp node_modules/materialize-css/dist/js/materialize.min.js src/js/vendors/
    cp node_modules/jquery/dist/jquery.min.js src/js/vendors/

## Instalamos react-materialize o react-toolbox y material-ui

### react-materialize
[https://react-materialize.github.io/](https://react-materialize.github.io/)  
[https://github.com/react-materialize/react-materialize](https://github.com/react-materialize/react-materialize)


    $ npm i -S react-materialize

### react-toolbox
[http://react-toolbox.com/#/](http://react-toolbox.com/#/)

    npm install --save react-toolbox

### material-ui
[http://www.material-ui.com/#/](http://www.material-ui.com/#/)  
[https://github.com/callemall/material-ui](https://github.com/callemall/material-ui)   
[https://github.com/zilverline/react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)

    $ npm i -S react-tap-event-plugin material-ui


### Agregamos la Fuente Roboto
Requerida para Material Design

[https://fonts.google.com/specimen/Roboto](https://fonts.google.com/specimen/Roboto)

### Agregamos Material Design Icon
Requerida para Material Design. Agregamos el enlace en el **head tag**
[https://material.io/icons/](https://material.io/icons/)

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">


### Instalamos Font Awesome
Instalamos desde la terminal:

    npm i -S font-awesome

Usamos con SASS:

    @import '../node_modules/font-awesome/scss/font-awesome';

## Agregando Estilos
### Inline:

    <tag style={{color: '#8e24aa'}}></tag>

### Declarando Variable

    var styles = {
      backgroundColor: '#d81b60',
      color: '#2196f3',
      marginTop: 50 // por defecto no se coloca px
    }
    <tag style={styles}></tag>

### Mediante Archivo Externo

**Style.jsx**

    var blue = '#2196f3'
    var red = '#d81b60'
    
    module.exports = {
      blue: blue,
      red: red
    }

**Importamos el archivo Style.jsx**

    import style from './Style.jsx'

**Declaramos la variable de estilos**

    var styleTag = {
      backgroundColor: style.blue,
      color: style.red
    }

**Agregamos los estilos**

    <tag style={styleTag}></tag>
