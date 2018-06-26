const Produto = require('../Produtos.model');

describe('#ProdutosController', () => {
    it('#listagem json', (fnFinalizacao) => {
        new Produto().lista((res) => {
            if (res.statusCode == 200) {
                console.log(" - Status ta ok");
            }

            if (res.headers['content-type'] == 'application/json; charset=utf-8') {
                console.log(" - Content type ok");
            }

            // notifica o mocha que o callback foi finalizado
            fnFinalizacao();
        });
    });
});