const connectionFactory = require('../infra/connectionFactory');

module.exports = (app) => {
    return app.get('/produtos', (req, res) => {
        const connection = connectionFactory();

        connection.query('select * from livros', (err, result) => {
            err && console.error(err);
            res.render("produtos/lista", { produtos: result });
        });
        
        connection.end();
    });
}
