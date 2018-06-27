var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', () => {

    it('#listagem de produtos json', (done) => {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#cadastro de porduto json - titulo inválido', (done) => {
        request.post('/produtos/form')
            .send({ titulo: '', descricao: 'Olá novo mundo', preco: '85.5'})
            .expect(400, done);
    });

    it('#cadastro de porduto json - preco inválido', (done) => {
        request.post('/produtos/form')
            .send({ titulo: 'oloco bicho', descricao: 'Olá novo mundo', preco: 'sp' })
            .expect(400, done);
    });

    it('#cadastro de porduto json - correto', (done) => {
        request.post('/produtos/form')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .send({ titulo: 'oloco bicho', descricao: 'Olá novo mundo', preco: '65.4' })
            .expect(200, done);
    });

});