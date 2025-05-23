const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASS, // Password
  {
    host: process.env.DB_HOST, // Host
    dialect: 'mysql', // Database dialect
  }
);

module.exports = sequelize;  
