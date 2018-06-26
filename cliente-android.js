const Produtos = require('./Produtos.model');
const produtos = new Produtos();

produtos.lista((res)=> {
    console.log('========= lista =========');
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo: ' + body);
    });
});

const livro = {
    titulo: '',
    descricao: 'Livro top da casadocodigo',
    preco: 48.3
};

produtos.salva(livro, (res) => {
    console.log('========= cadastra =========');
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('Corpo: ' + body);
        // this.lista();
    });
});
