const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
// name === ttpbackend2023

const db = new Sequelize(`postgres://liuke:220701528@localhost:5432/${name}`, {
  logging: false,
});

module.exports = db;
