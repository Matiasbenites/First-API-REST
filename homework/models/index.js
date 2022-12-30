const sequelize = require("sequelize"); //Import of sequelize

const db = new sequelize.Sequelize("sqlite::memory:"); // Define of db using sqlite

module.exports = db; //Export db
