const { DataTypes } = require('sequelize');
const db = require('./index'); //Import db sequelize from main file

const userModel = db.define('user', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING
})

module.exports = userModel;
