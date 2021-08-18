import React from 'react'
import {useSelector} from "react-redux";
import './styles/pokemons .css';
import bolpoke from "../../img/bolpoke.png";

export const Pokemon = () => {

    const {pokeName} = useSelector(state => state.pokemon);


    return (
        <div>
            <div className="detail-card">
                <div><img src={pokeName.picture} alt="flag" className="card-img"/></div>

                <div className="card-information">
                    <h1><img src={bolpoke} alt="logo" className="bol-card"/> N.{pokeName.id} {pokeName.name}</h1>
                    <hr/>
                    <div className="card-ul">
                        <ul className="info-poke-card">
                            <li>Lives:{pokeName.lives}</li>
                            <li>Attack :{pokeName.attack}</li>
                            <li>Defense :{pokeName.defense}</li>
                            <li> Speed:{pokeName.speed}</li>
                        </ul>
                        <ul className="info-poke-card1">
                            <li> height: {pokeName.height}</li>
                            <li> weight:{pokeName.weight}</li>
                            <div>
                                <li> types:{pokeName.type}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}