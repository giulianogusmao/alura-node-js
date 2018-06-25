const mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alura_node'
};

module.exports = () => {
    return mysql.createConnection(config);
}
