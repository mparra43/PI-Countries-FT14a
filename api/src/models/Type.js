const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');

const Type = sequelize.define('type', {
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Type;
