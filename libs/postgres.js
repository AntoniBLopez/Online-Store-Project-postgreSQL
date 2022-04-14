const { Client } = require('pg');

async function getConnection () {
  const client = new Client({
    host: 'localhost',
    por: 5432,
    user: 'toni',
    password: 'admin123',
    database: 'my_store'
  })
  await client.connect()
  return client;
}

module.exports = getConnection;
