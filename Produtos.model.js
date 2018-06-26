var http = require('http');

const produtos = class Produtos {
    constructor() {
        this._host = 'localhost';
        this._port = 3000;
    }

    lista(callback) {
        var configuracoes = {
            hostname: this._host,
            port: this._port,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(configuracoes, function (res) {
            if (typeof callback === 'function') {
                callback(res);
            }
        });
    }

    salva(produto, callback) {
        var configuracoes = {
            hostname: this._host,
            port: this._port,
            path: '/produtos/form',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        };

        var envia = http.request(configuracoes, function (res) {
            if (typeof callback === 'function') {
                callback(res);
            }
        });

        envia.end(JSON.stringify(produto));
    }
};

module.exports = produtos;