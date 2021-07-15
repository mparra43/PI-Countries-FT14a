const {response} = require('express');
const {Country} = require('../models/Country');
const {activities} = require('../models/Activity');
const countriesAll = async (req, res = response) => {
    try {
        const { count, rows }  = await Country.findAndCountAll({
            offset: 10,
            limit: 10
        });
        return res.status(201).json({data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
const countryId = async (req, res = response) => {
    const {id} = req.params;
    try {
       // const country = await Activity.findOne({
       //     attributes: ["id", "name", "complexity", "term", "season"],
        //    where: { id }
     //   });
        const country = await Country.findOne({where: {id}});

        return res.status(201).json(country);
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
const countryName = async (req, res = response) => {
    const {name} = req.query;
    try {
        const country = await Country.findOne({where: {name}});
        return res.status(201).json( country);
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
module.exports = {
    countriesAll,
    countryId,
    countryName
}