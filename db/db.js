const { Sequelize } = require("sequelize");
require('dotenv').config();
const pg = require('pg')

const db = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require", {
  logging: false,
});

module.exports = db;