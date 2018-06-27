const mysql = require('mysql');

const createDBConnection = () => {
    if (!process.env.NODE_ENV || process.env.node === 'dev') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'alura_node_test'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'alura_node_test'
        });
    }
};

// wrapper
module.exports = () => {
    return createDBConnection;
}
