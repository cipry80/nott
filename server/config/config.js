const dotenv = require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_DEV_USERNAME || 'root',
    password: process.env.DB_DEV_PASSWORD || null,
    database: process.env.DB_DEV_NAME || 'dev',
    host: process.env.DB_DEV_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_TEST_USERNAME || 'root',
    password: process.env.DB_TEST_PASSWORD || null,
    database: process.env.DB_TEST_NAME || 'test',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_PROD_USERNAME || 'root',
    password: process.env.DB_PROD_PASSWORD || null,
    database: process.env.DB_PROD_NAME || 'prod',
    host: process.env.DB_PROD_HOST || '127.0.0.1',
    dialect: 'postgres'
  }
};
