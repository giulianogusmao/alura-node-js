const Produto = require('../Produtos.model');
const assert = require('assert');

describe('#ProdutosController', () => {
    it('#listagem de produtos json', (done) => {
        new Produto().lista((res) => {
            // verifica se foi retornado o status 200
            assert.equal(res.statusCode, 200);

            // verifica se o content-type foi no formato json
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');

            // notifica o mocha que o callback foi finalizado
            done();
        });
    });
});