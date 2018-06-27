
module.exports = (app) => {
    app.get('/', (req, res, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.lista((err, result) => {
            if (err) {
                console.error(err);
                return next(err);
            }

            res.render('home/index', { livros: (result || []) });
        });

        connection.end();
    });
}