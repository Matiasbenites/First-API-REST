const { DataTypes } = require('sequelize');
const db = require('./index'); //Import db sequelize from main file

const rolModel = db.define('roles', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
})

module.exports = rolModel;