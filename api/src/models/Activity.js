const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');
const {Country} = require('./Country');
const {User} = require('./User');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Activity = sequelize.define('activity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complexity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    term: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Activity;
