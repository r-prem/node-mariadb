const mariadb = require('mariadb');
const config = require('config');
const dbConfig = config.get('db');

/**
 * Based on https://mariadb.com/kb/en/getting-started-with-the-nodejs-connector/
 */
const pool = mariadb.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    connectionLimit: dbConfig.connectionLimit
});

const simpleQuery = async () => {
    let connection;
    return new Promise(async (resolve, reject) => {
        try {
            connection = await pool.getConnection();
            const rows = await connection.query('Select * from Table');
            if (connection) return connection.end();
            resolve(rows);
        } catch (e) {
            console.log(e);
            reject();
        }
    })
}


// lets other modules access this function
module.exports = {
    simpleQuery
}



