const mysql = require('mysql');

const createDBConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'alura_node'
    });
};

// wrapper
module.exports = () => {
    return createDBConnection;
}
