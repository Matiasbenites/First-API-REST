const { DataTypes } = require("sequelize");
const db = require("./index"); //Import db sequelize from main file

const taskModel = db.define("task", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
});

module.exports = taskModel;
