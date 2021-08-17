const baseUrl = process.env.API_URL;
const fetch = require('node-fetch');
const {Pokapi} = require('../models/PokeApi');
const {Pokemon} = require('../models/Pokemon');


const fetchAllApiPokemon = async (endpoint) => {
    const url = `${baseUrl}/${endpoint}`;
    const pokemonApi = [];
    try {
        const response = await fetch(url);
        const data = await response.json();

        for (let i = 0; i < data.results.length; i++) {
            let bringPokemon = await fetch(data.results[i].url);
            let pokemon = await bringPokemon.json();
            let {id, name, stats, height, weight, sprites, types} = pokemon;
              let tipos =  types.length < 2 ? [types[0].type.name] : [types[0].type.name, types[1].type.name]
            pokemonApi.push({
                id,
                name,
                lives: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                speed: stats[5].base_stat,
                height,
                weight,
                picture: sprites.other.dream_world.front_default,
                type: tipos.toString()
            });
        }
        pokemonApi.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });

        return pokemonApi

    } catch (error) {
        return error;
    }
}

const fetchPokeParameter = async (parameter) => {
    const url = `${baseUrl}/pokemon/${parameter}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        let {id, name, stats, height, weight, sprites, types} = data;
        return {
            id,
            name,
            lives: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            height,
            weight,
            picture: sprites.other.dream_world.front_default,
            types: types.length < 2 ? [types[0].type.name] : [types[0].type.name, types[1].type.name],
        };
    } catch (error) {
        return error;
    }
}

const fetchPokeApi = async () => {
    let pokeApi = [];
    const {count, rows} = await Pokapi.findAndCountAll();
    pokeApi = rows
    return pokeApi
}

const fetchAllPokemon = async () => {
    const respApi = await fetchAllApiPokemon('pokemon?offset=0&limit=40');
    const {count, rows} = await Pokemon.findAndCountAll();
     return respApi.concat(rows);
}
module.exports = {
    fetchAllPokemon,
    fetchPokeParameter,
    fetchPokeApi,
}