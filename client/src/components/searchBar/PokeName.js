import React from 'react'
import {useSelector} from "react-redux";


export const PokeName = () => {


    const {pokeName} = useSelector(state => state.pokemon);

    return (
        <div>
            <div className="country-card">
                <img src={pokeName.picture} alt="pokemon" />className="bandera"/>
                <h3>{pokeName.id}</h3><h1>{pokeName.name}</h1>
                <hr/>
                <h3> Vidas:{pokeName.lives}</h3>
                <h3> Ataque :{pokeName.attack}</h3>
                <h4> Defensa :{pokeName.defense}</h4>
                <h4> Velocidad:{pokeName.speed}</h4>
                <h4> Altura: {pokeName.height}</h4>
                <h4> peso:{pokeName.weight}</h4>
            </div>
        </div>
    )
}