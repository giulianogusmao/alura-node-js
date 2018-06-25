const name = 'produtos';
const route = `/${name}`;

module.exports = (app) => {
    app.get(`${route}`, (req, res) => {
        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);
        
        produtosDAO.lista((err, result) => {
            err && console.error(err);
            res.render(`${name}/lista`, { produtos: (result || []) });
        });

        connection.end();
    });

    app.get(`${route}/form`, (req, res) => {
        res.render(`${name}/form`);
    });

    app.post(`${route}/salva`, (req, res) => {
        const produto = req.body;

        const connection = app.infra.connectionFactory();
        const produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.salva(produto, (err, result) => {
            err && console.error(err);
            res.redirect(`${route}`);
        });

        connection.end();
    });
}
