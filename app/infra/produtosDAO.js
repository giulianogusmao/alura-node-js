class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.query('select * from livros', (err, result) => {
            callback(err, result);
        });
    };
}

module.exports = () => {
    return ProdutosDAO;
};