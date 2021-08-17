import React from 'react';
import {Navbar} from '../ui/Navbar';
import {ShowPokemon} from "../Pokemons/ShowPokemons";
import {FilterPokemon} from "../header/FilterPokemon";
import {OrderPokemon} from "../Pokemons/OrderPokemon";
import {PokemonModal} from "../header/PokemonModal";
import './styles/mainScreen.css';

export const MainScreen = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <FilterPokemon/>
            <div>
                <OrderPokemon/>
                <hr/>
                <ShowPokemon/>
            </div>
            <PokemonModal/>
        </div>
    )
}
