# Curso de React de Codecademy Con Materializecss Y Font Awesome

## Instalamos MaterializeCSS

Agregamos la fuente *ROBOTO*  
Instalamos *Materializecss* y *JQuery* con **NPM** desde la terminal:

    npm i -S jquery materialize-css

Usamos con SASS:

    @import '../node_modules/materialize-css/sass/materialize';

Agregamos JQuery y Materializecss.js en js/vendors

    cp node_modules/materialize-css/dist/js/materialize.min.js src/js/vendors/
    cp node_modules/jquery/dist/jquery.min.js src/js/vendors/

## Instalamos Font Awesome
Instalamos desde la terminal:

    npm i -S font-awesome

Usamos con SASS:

    @import '../node_modules/font-awesome/scss/font-awesome';