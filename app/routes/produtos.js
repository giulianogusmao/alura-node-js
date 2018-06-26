const name = 'produtos';
const route = `/${name}`;

module.exports = (app) => {
    app.get(`${route}`, (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);
        
        produtosDAO.lista((err, result) => {
            err && console.error(err);
            const produtos = { produtos: (result || []) };

            res.format({
                html: function () {
                    res.render(`${name}/lista`, produtos);
                },
                json: function () {
                    res.json(produtos);
                }
            });
        });

        connection.end();
    });

    app.get(`${route}/form`, (req, res) => {
        res.render(`${name}/form`, { errosValidacao: {} });
    });

    app.post(`${route}`, (req, res) => {
        const produto = req.body;

        // valida dados antes de realizar o cadastro
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        const erros = req.validationErrors();

        if (erros) {
            res.render(`${name}/form`, { errosValidacao: erros });
            return;
        }

        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.salva(produto, (err, result) => {
            err && console.error(err);
            res.redirect(`${route}`);
        });

        connection.end();
    });
}
