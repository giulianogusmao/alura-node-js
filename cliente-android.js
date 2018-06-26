var http = require('http');

class Produtos {
    constructor() {
        this._host = 'localhost';
        this._port = 3000;
    }

    lista() {
        var configuracoes = {
            hostname: this._host,
            port: this._port,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        return http.get(configuracoes, function (res) {
            // console.log(res.statusCode);
            res.on('data', function (body) {
                console.log('Corpo: ' + body);
            });
        });
    }

    salva(produto) {
        var configuracoes = {
            hostname: this._host,
            port: this._port,
            path: '/produtos',
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        };

        var envia = http.request(configuracoes, function (res) {
            console.log(res.statusCode);
            res.on('data', function (body) {
                console.log('Corpo: ' + body);
                this.lista();
            });
        });

        envia.end(JSON.stringify(produto));
    }
};


var produto = new Produtos();
produto.lista();

produto.salva({
    titulo: 'Novo livro de Nodejs',
    descricao: 'Livro top da casadocodigo',
    preco: 48.3
});

