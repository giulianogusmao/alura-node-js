/**
 * modulo que retorna a variavel app com o express configurado
 */
const express = require('express');
const load = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true }));

    load({ cwd: 'app' })
        .include('infra')
        .then('routes')
        .into(app);

    return app;
}
