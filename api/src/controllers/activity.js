// res.body = nombre, complejidad, duracaion , temporada
const {response} = require('express');
const Activity = require('../models/Activity')

const activity = async (req, res = response) => {
    const {name, complexity, term, season} = req.body;
    try {
        let newActivity = await Activity.findOne({ where: { name } });
        if (newActivity === null) {
            let newActivity = await Activity.create({
                name,
                complexity,
                term,
                season,
            });
            return res.status(201).json({msg: "activity created successfully"});
        }else {
            return res.status(400).json({msg:"this activity already exists"});
        }

    } catch(e){
        return res.status(500).json({msg:"error"})
    }

}
module.exports = activity;