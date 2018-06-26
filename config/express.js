/**
 * modulo que retorna a variavel app com o express configurado
 */
const express = require('express');
const load = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = () => {
    const app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // carregamento dos dados recebidos do formulário
    app.use(bodyParser.urlencoded({ extended: true }));

    // carregamento dos dados recebidos em json
    app.use(bodyParser.json());

    // validando dados do cadastro
    app.use(expressValidator());

    load({ cwd: 'app' })
        .include('infra')
        .then('routes')
        .into(app);

    return app;
}
