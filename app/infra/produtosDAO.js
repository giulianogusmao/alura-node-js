class ProdutosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    lista(callback) {
        this._connection.query('select * from livros', callback);
    };

    salva(produto, callback) {
        this._connection.query('insert into livros set ?', produto, callback);
        // Caso o json não estivesse com os mesmos nomes das colunas teríamos que especifica-las da seguinte forma:
        // this._connection.query('insert into produtos (titulo, preco, descricao) values (?, ?, ?)', [produto.titulo, produto.preco, produto.descricao], callback);
    }
}

module.exports = () => {
    return ProdutosDAO;
};