module.exports = (app) => {
    return app.get('/produtos', (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);
        
        produtosDAO.lista((err, result) => {
            err && console.error(err);
            res.render("produtos/lista", { produtos: (result || []) });
        });

        connection.end();
    });
}
