const {response} = require('express');

const countriesAll = (req, res = response) => {
    res.json({
        msg: 'todos los pais '
    });
}
const countryId = (req, res = response) => {
    res.json({
        msg: 'PASIS ID'
    });
}
const countryName = (req, res = response) => {
    res.json({
        msg: 'PAIS POR NAME '
    });
}
module.exports = {
    countriesAll,
    countryId,
    countryName
}