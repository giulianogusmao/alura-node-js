var http = require('http');
var server = http.createServer((req, res) => {
    if (req.url == '/produtos') {
        res.end("<html><body><h1>Listando os produtos</h1></body></html>");
    }

    res.end("<html><body><h1>Home</h1></body></html>");
});

server.listen('3000');
console.log('Servidor rodando');