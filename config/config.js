require('dotenv').config();

const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	dbUser: process.env.DB_USER || 'toni',
	dbPassword: process.env.DB_PASSWORD || 'admin123',
	dbHost: process.env.DB_HOST || 'localhost',
	dbPort: process.env.DB_PORT || 'my_store',
	dbName: process.env.DB_NAME || '5432',
};

module.exports = { config };
