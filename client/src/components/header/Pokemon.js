import React from 'react'
import {useSelector} from "react-redux";


export const Pokemon = () => {

    const {pokeName} = useSelector(state => state.pokemon);




    return (
        <div>
            <div className="detail-card">
                <div><img src={pokeName.picture} alt="flag" className="card-img"/></div>

                <div>
                    <h3>{pokeName.id}</h3><h1>{pokeName.name}</h1>
                    <hr/>
                    <h3> Vidas:{pokeName.lives}</h3>
                    <h3> Ataque :{pokeName.attack}</h3>
                    <h3> Defensa :{pokeName.defense}</h3>
                    <h3> Velocidad:{pokeName.speed}</h3>
                    <h4> Altura: {pokeName.height}</h4>
                    <h4> peso:{pokeName.weight}</h4>
                    <h4> types</h4>
                    {pokeName.type.map((e) => (
                        <h3 key={e}>{e}</h3>
                    ))
                    }
                </div>

            </div>
        </div>
    )
}