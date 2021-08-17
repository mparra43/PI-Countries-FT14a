const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Pokemon = sequelize.define('pokemon', {
    name: {
        type: DataTypes.STRING
    },
    lives: {
        type: DataTypes.INTEGER
    },
    attack: {
        type: DataTypes.INTEGER
    },
    defense: {
        type: DataTypes.INTEGER
    },
    speed: {
        type: DataTypes.INTEGER
    },
    height: {
        type: DataTypes.INTEGER
    },
    weight: {
        type: DataTypes.INTEGER
    },
    picture: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
});

module.exports = {
    Pokemon
};