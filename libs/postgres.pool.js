const { Pool } = require('pg');

const { config: { dbUser, dbPassword, dbHost, dbPort, dbName } } = require('../config/config.js')

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
