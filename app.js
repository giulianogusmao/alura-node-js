const app = require('./config/express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// disponibilizando a variavel io
app.set('io', io);

const porta = process.env.PORT || 3000;

http.listen(porta, () => {
    console.log("servidor rodando no heroku");
});
