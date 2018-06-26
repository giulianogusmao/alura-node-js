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
                html: () => res.render(`${name}/lista`, produtos),
                json: () => res.json(produtos)
            });
        });

        connection.end();
    });

    app.get(`${route}/form`, (req, res) => {
        res.render(`${name}/form`, { errosValidacao: {}, produto: {} });
    });

    app.post(`${route}/form`, (req, res) => {
        const produto = req.body;

        // valida dados antes de realizar o cadastro
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        const erros = req.validationErrors();

        if (erros) {
            const response = { errosValidacao: erros, produto };
            res.format({
                html: () => res.status(400).render(`${name}/form`, response),
                json: () => res.status(400).json(response)
            });
            return false;
        }

        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.salva(produto, (err, result) => {
            err && console.error(err);

            res.format({
                html: () =>  res.redirect(`${route}`),
                json: () => res.json(result)
            });

        });

        connection.end();
    });
}
