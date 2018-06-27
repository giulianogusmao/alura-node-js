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

    app.use(express.static('./app/public'));

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

    // criando um middleware para validar a url acessada
    app.use((req, res, next) => {
        res.status(404).render('erros/404');
        next();
    });

    // criando um middleware para verificar se houve algum erro
    app.use((error, req, res, next) => {
        if (process.env.NODE_ENV == 'production') {
            res.status(500).render('error/500');
            return;
        }
        next(error);
    });

    return app;
}
