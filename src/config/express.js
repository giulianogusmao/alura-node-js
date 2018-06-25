/**
 * instânciando a variavel app com o express configurado
 */
var app = require('express')();
app.set('view engine', 'ejs');
app.set('views', './src/app/views');

module.exports = () => {
    return app;
}
