const {response} = require('express');
const {fetchAllPokemon, fetchPokeParameter, fetchPokeApi} = require('../helpers/fetchApi')
const {Pokemon} = require('../models/Pokemon');
const Type = require('../models/Type')



const pokeAll = async (req, res = response) => {

    try {
        const pokemApi = await fetchPokeApi()
        const overallPoke = await fetchAllPokemon();
        const {count, rows} = await Pokemon.findAndCountAll();
        return res.status(201).json({data: overallPoke, pokemonApi: pokemApi, pokemonBd:rows});
    } catch (error) {
        return res.status(500).json({msg: "error fallo"});
    }
}

const pokemonId = async (req, res = response) => {
    const {id} = req.params;
    try {
        if (id < 899) {
            const poke = await fetchPokeParameter(id);
            return res.status(201).json(poke);
        } else {
            const poke = await Pokemon.findOne({where: {id}});
            return res.status(201).json(poke);
        }
    } catch (error) {
        return res.status(500).json({msg: "No se encontró el pokemon con ese id "});
    }
}
const pokemonName = async (req, res = response) => {
    const {name} = req.query;
    try {
        let poke = await Pokemon.findOne({where: {name}});
        if (poke === null) {
            const pokeApi = await fetchPokeParameter(name);
            return res.status(201).json(pokeApi);
        } else {
            return res.status(201).json(poke);
        }
    } catch (error) {
        return res.status(500).json({msg: "No se encontró el pokemon con ese nombre"});
    }
}


const addPokemon = async (req, res = response) => {
    const {name, lives, attack, defense, speed, height, weight, picture, type} = req.body;

    try {
        let newPokemon = await Pokemon.create({
            name,
            lives,
            attack,
            defense,
            speed,
            height,
            weight,
            picture,
            type: type.toString()
        });
        return res.status(201).json({ok: true, msg: "Se ha creado un nuevo pokemon"});
    } catch (e) {
        return res.status(500).json({msg: "error"})
    }
}

const allTypes = async (req, res = response) => {
    try {
        const {count, rows} = await Type.findAndCountAll();
        return res.status(201).json({data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
module.exports = {
    pokeAll,
    pokemonId,
    pokemonName,
    addPokemon,
    allTypes
}