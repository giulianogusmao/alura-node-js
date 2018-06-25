const mysql = require('mysql');

module.exports = (app) => {
    return app.get('/produtos', (req, res) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'alura_node'
        });

        connection.query('select * from livros', (err, result) => {
            err && console.error(err);
            res.render("produtos/lista", { produtos: result });
        });
        connection.end();
    });
}
