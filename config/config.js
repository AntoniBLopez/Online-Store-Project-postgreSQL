require('dotenv').config();

const config = {
	env: process.env.NODE_ENV_DEV || 'development',
  isProd: process.env.NODE_ENV_PROD || 'production',
	port: process.env.PORT || 3000,
	dbUser: process.env.DB_USER || 'toni',
	dbPassword: process.env.DB_PASSWORD || 'admin123',
	dbHost: process.env.DB_HOST || 'localhost',
	dbName: process.env.DB_NAME || 'my_store',
	dbPort: process.env.DB_PORT || 5432,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { config };
