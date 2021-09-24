const Pool = require('pg').Pool
const pool = new Pool({
    max: 20,
    connectionString: 'postgres://pguser:pguser@postgres:5432/pgdb',
    idleTimeoutMillis: 30000
})

module.exports = pool

