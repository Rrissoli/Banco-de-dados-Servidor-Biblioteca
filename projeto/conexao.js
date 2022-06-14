const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'aulacripto',
    password: 'postgres',
    port: 1302
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}

