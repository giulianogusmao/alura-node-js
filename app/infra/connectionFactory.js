const mysql = require('mysql');

const createDBConnection = () => {
    if (!process.env.NODE_ENV || process.env.node === 'dev') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'alura_node'
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

    if (process.env.NODE_ENV == 'production') {

        /**  
         * Application cdc-alura-nodejs1
         * mysql://b947bc1c385f5e:3a44250f@us-cdbr-iron-east-04.cleardb.net/heroku_18a18fa17613c24?reconnect=true
         * Conexão com o mysql do heroku -> mysql -h us-cdbr-iron-east-04.cleardb.net -u b947bc1c385f5e -p (3a44250f)
         * 
         * Podemos deixar as informações explicitas caso seja um servidor seguro, ou no heroku podemos utilizar
         * expressões regulares para ler os dados de conexão e popular os campos. Exemplo...
         * 
            var url = process.env.CLEARDB_DATABASE_URL;
            var grupos = url.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?/);
            return mysql.createConnection({
                host:grupos[3],
                user:grupos[1],
                password:grupos[2],
                database:grupos[4]
            });
         */
        return mysql.createConnection({
            host: 'us-cdbr-iron-east-04.cleardb.net',
            user: 'b947bc1c385f5e',
            password: '3a44250f',
            database: 'heroku_18a18fa17613c24'
        });
    }    
};

// wrapper
module.exports = () => {
    return createDBConnection;
}
