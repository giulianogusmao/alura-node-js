/**
 * modulo que retorna a variavel app com o express configurado
 */
const express = require('express');
const load = require('consign');

module.exports = () => {
    const app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load({ cwd: 'app' })
        .include('infra')
        .then('routes')
        .into(app);

    return app;
}
