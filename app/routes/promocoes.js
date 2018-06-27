module.exports = (app) => {
    app.get('/promocoes/form', (req, res, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.lista((err, result) => {
            if (err) {
                console.error(err);
                return next(err);
            }

            console.log(result);
            res.render('promocoes/form', { lista: (result || []) });
        });

        connection.end();
    });

    app.post('/promocoes', (req, res, next) => {
        const promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocoes/form');
    });
}
