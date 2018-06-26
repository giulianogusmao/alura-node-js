var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', () => {

    it('#listagem de produtos json', (done) => {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});