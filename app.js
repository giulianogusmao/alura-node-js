const app = require('./config/express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// disponibilizando a variavel io
app.set('io', io);

http.listen(3000, () => {
    console.log("servidor rodando");
});
