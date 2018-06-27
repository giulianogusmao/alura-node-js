const name = 'produtos';
const route = `/${name}`;

module.exports = (app) => {
    app.get(`${route}`, (req, res, next) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.lista((err, result) => {
            if (err) {
                console.error(err);
                return next(err);
            }

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

    app.post(`${route}/form`, (req, res, next) => {
        const produto = req.body;

        // valida dados antes de realizar o cadastro
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Preço inválido').isFloat();
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
            if (err) {
                console.error(err);
                return next(err);
            }

            res.format({
                html: () => res.redirect(`${route}`),
                json: () => res.json(result)
            });

        });

        connection.end();
    });
}
