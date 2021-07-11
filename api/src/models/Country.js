const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Country = sequelize.define('country', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,

    },
    name: {
        type: DataTypes.STRING
    },
    flag: {
        type: DataTypes.STRING
    },
    continent: {
        type: DataTypes.STRING
    },
    capital: {
        type: DataTypes.STRING
    },
    subregion: {
        type: DataTypes.STRING
    },
    area: {
        type: DataTypes.INTEGER
    },
    population: {
        type: DataTypes.INTEGER
    },
});

module.exports = {
    Country
};