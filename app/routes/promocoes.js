module.exports = (app) => {
    app.get('/promocoes', (req, res, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.listaPromocoes((err, result) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.render('promocoes/lista', { produtos: (result || []) });
        });

        connection.end();
    });

    app.get('/promocoes/form', (req, res, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.listaNaoPromocoes((err, result) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            res.render('promocoes/form', { lista: (result || []) });
        });

        connection.end();
    });

    app.post('/promocoes/form', (req, res, next) => {
        const promocao = req.body;

        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.addPromocao(promocao.livro, (err, result) => {
            if (err) {
                console.error(err);
                return next(err);
            }

            // notifica o cliente que uma nova promocao foi adicionada
            app.get('io').emit('novaPromocao', promocao);

            res.format({
                html: () => res.redirect('/promocoes'),
                json: () => res.josn(result)
            })
        });

        connection.end();
    });
}
