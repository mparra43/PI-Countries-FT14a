import React from 'react'
import {useSelector} from "react-redux";




export const PokemonId = () => {

    const {showPoke} = useSelector(state => state.pokemon);
    console.log(showPoke);

    return (
        <div>
            <div className="country-card">
                <img src={showPoke.picture} alt="flag" className="bandera"/>
                <h3>{showPoke.id}</h3><h1>{showPoke.name}</h1>
                <hr/>
                <h3> Vidas:{showPoke.lives}</h3>
                <h3> Ataque :{showPoke.attack}</h3>
                <h4> Defensa :{showPoke.defense}</h4>
                <h4> Velocidad:{showPoke.speed}</h4>
                <h4> Altura: {showPoke.height}</h4>
                <h4> peso:{showPoke.weight}</h4>
            </div>
        </div>
    )
}