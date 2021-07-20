// res.body = nombre, complejidad, duracaion , temporada
const {response} = require('express');
const Activity = require('../models/Activity')

const activitiesAll = async (req, res = response) => {
    try {
        const { count, rows }  = await Activity.findAndCountAll();
        return res.status(201).json({data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}

const activity = async (req, res = response) => {
    const {name, complexity, term, season, country,} = req.body;
    try {
        let newActivity = await Activity.create({
            name,
            complexity,
            term,
            season,
            country,
        });
        return res.status(201).json({msg: "activity created successfully"});
    } catch (e) {
        return res.status(500).json({msg: "error"})
    }
}

module.exports = {
    activitiesAll,
    activity
};
