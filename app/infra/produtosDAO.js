class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.query('SELECT * FROM livros', callback);
    };

    salva(produto, callback) {
        this._connection.query('INSERT INTO livros set ?', produto, callback);
        // Caso o json não estivesse com os mesmos nomes das colunas teríamos que especifica-las da seguinte forma:
        // this._connection.query('INSERT INTO produtos (titulo, preco, descricao) values (?, ?, ?)', [produto.titulo, produto.preco, produto.descricao], callback);
    }

    listaPromocoes(callback) {
        this._connection.query(`
            SELECT * FROM livros l
            INNER JOIN livros_promocoes p ON p.id = l.id
        `, callback);
    }

    listaNaoPromocoes(callback) {
        this._connection.query(`
            SELECT 
                l.id,
                l.titulo
            FROM livros l
            LEFT JOIN livros_promocoes p ON p.id = l.id 
            WHERE ISNULL(p.id)
            `, callback);
    };

    addPromocao(produto, callback) {
        this._connection.query(`INSERT INTO livros_promocoes set ?`, produto, callback);
    }
}

module.exports = () => {
    return ProdutosDAO;
};