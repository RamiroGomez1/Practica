var mysql = require('mysql')
require('dotenv').config({ path: './.env' })

var util = require('util')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
})


pool.query('SELECT 1 + 1 AS result', (error, results) => {
    if (error) {
        console.error('Database connection failed:', error);
    } else {
        console.log('Database connection successful:', results);
    }
});

module.exports = pool